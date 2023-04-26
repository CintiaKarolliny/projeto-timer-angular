import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timer: number;
  counter: number;

  constructor() {
    this.timer = setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
    this.counter = 0;
  }

  ngOnInit() {}

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  getMinutes() {
    return Math.trunc(this.counter / 60);
  }
}
