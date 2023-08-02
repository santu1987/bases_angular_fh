import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';

@NgModule({
  imports: [CommonModule, CounterComponent, HeroComponent],
  declarations: [],
})
export class AppModule {}
