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

  description(): string {
    const descriptions = this.anime.descriptions;
    const validation = (text: string) =>
      text == undefined || text == null || text === '';
    if (!validation(descriptions.en)) return descriptions.en;
    if (!validation(descriptions.jp)) return descriptions.jp;
    if (!validation(descriptions.it)) return descriptions.it;
    return '';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  }
  estrellas(score: number): number {
    console.log(score);
    return Math.round(score / 20);
  }
  getFecha(anime: Anime): fecha {
    const dateStart = new Date(anime.start_date);
    const evaluacion =
      dateStart.valueOf() > new Date().valueOf() || anime.status === 1;
    return {
      titulo: evaluacion ? 'Inicio' : 'Finalizado',
      fecha: this.formatDate(evaluacion ? anime.start_date : anime.end_date),
    };
  }
}
type fecha = {
  titulo: string;
  fecha: string;
};
