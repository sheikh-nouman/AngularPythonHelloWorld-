from marshmallow import Schema, fields

class Problem():
    def __init__(self, id, name, description):
        self.id = id
        self.name = name
        self.description = description

class ProblemSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    description = fields.Str()