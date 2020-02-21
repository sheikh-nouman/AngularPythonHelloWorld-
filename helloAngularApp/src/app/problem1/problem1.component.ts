import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem';

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.css']
})
export class Problem1Component implements OnInit {

  problem: Problem = {
    id: 1,
    name: 'Problem 1',
    description: "Good morning! Here's your coding interview problem for today.\n\n" +
    "This problem was recently asked by Google.\n\n" + 
    "Given a list of numbers and a number k,\n" + "return whether any two numbers from the list add up to k.\n\n" + 
    "For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.\n\n" + 
    "Bonus: Can you do this in one pass?" 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
