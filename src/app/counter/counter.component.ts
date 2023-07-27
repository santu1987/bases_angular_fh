import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public title: string = 'Ng counter';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }
}
