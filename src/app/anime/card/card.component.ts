import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/entidades/anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() anime: Anime = {} as Anime;
  constructor() {}

  ngOnInit(): void {}
}
