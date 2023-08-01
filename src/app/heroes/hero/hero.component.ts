import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
})
export class HeroComponent implements OnInit {
  constructor() {}
  public name: string = 'Ironman';
  public age: number = 45;
  ngOnInit() {}
}
