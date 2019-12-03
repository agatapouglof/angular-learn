import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time : string;
  isRed = false;
  constructor() { }
  intervalId : any; // type  : Timer
  ngOnInit() {
    this.startTicker();
  }

  stopTimer(){
    clearInterval(this.intervalId);
  }

  startTicker(){
    this.intervalId = setInterval(() => {
      this.time = moment().locale('fr').format('hh:mm:ss');
      this.isRed = ! this.isRed;
    }, 1000);
  }



}
