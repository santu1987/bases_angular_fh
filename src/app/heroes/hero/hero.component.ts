import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeroComponent implements OnInit {
  constructor() {}
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 23;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
//Si hiciera cambios desde js y no de angular estos cambios no se aplican porque estan fuera del ciclo de detección de cambios.
  ngOnInit() {}
}
