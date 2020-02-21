import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProblemAPIService} from './problems-api.service';
import {Problem} from './problem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Daily Problems - Solved';

  problemsListSubs: Subscription;
  problemsList: Problem[];

  constructor(private problemsApi: ProblemAPIService) {

  }

  ngOnInit() {
    this.problemsListSubs = this.problemsApi
    .getProblems()
    .subscribe(res => {
      this.problemsList = res;
    },
    console.error
    );
  }

  ngOnDestroy(){
    this.problemsListSubs.unsubscribe();
  }
}
