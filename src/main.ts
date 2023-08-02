import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CounterComponent } from './app/counter/counter.component';
import { HeroComponent } from './app/heroes/hero/hero.component';
import { ListComponent } from './app/heroes/list/list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    HeroComponent,
    ListComponent,
    BrowserModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Curso de Fernando Herrera';
}

bootstrapApplication(AppComponent);
