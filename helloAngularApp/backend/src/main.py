from flask import Flask, jsonify, request
from flask_cors import CORS

from data_objects.problems.problem import Problem, ProblemSchema

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return "hello python web!"

@app.route('/problems')
def get_problems():
    problem_objects = [Problem(1, 'problem_1', 'this is the problem1'), Problem(2, 'problem_2', 'this is the problem2') ]

    schema = ProblemSchema(many=True)
    problems = schema.dump(problem_objects)

    return jsonify(problems)


@app.route('/problems', methods=['POST'])
def add_problem():
    posted_problem = ProblemSchema(only=('id', 'name', 'description'))\
        .load(request.get_json())

    problem = Problem(**posted_problem.data, created_by="HTTP post request")

    return jsonify(problem), 201

if __name__ == "__main__":
    app.run()