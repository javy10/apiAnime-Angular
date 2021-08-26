import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/entidades/episode';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.sass']
})
export class CardDetalleComponent implements OnInit {

  @Input() episode: Episode = {} as Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
