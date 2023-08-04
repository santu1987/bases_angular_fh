import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public heroNames: string[] = [
    'Spiderman',
    'IronMan',
    'Hulk',
    'She Hulf',
    'Thor',
  ];
}
