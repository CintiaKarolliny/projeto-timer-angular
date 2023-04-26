import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  n: number = 10;

  constructor() {}

  ngOnInit() {}

  getNumbers() {
    let arr = [];

    for (let i = 1; i <= this.n; i++) {
      arr.push(Math.trunc(100 * Math.random()));
    }

    return arr;
  }
}
