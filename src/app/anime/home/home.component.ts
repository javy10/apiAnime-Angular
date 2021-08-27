import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Anime } from '../../entidades/anime';
import { getData, getGeneros } from '../request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  group!: FormGroup;
  generos!: string[];
  animes: Anime[] = [];
  count!: number;
  loading!: boolean;
  pageIndex: number = 0;
  pageSize: number = 10;
  status: Array<string> = [
    'Finalizado',
    'Emisión',
    'No publicado',
    'Cancelado',
  ];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAnime();
    this.group = new FormGroup({
      title: new FormControl('', [Validators.maxLength(20)]),
      generos: new FormControl(),
      status: new FormControl([0, 1]),
    });
    getGeneros(this.http).subscribe((x) => {
      x.sort();
      this.generos = x;
    });
  }
  buscar() {
    const values = this.group.value;
    this.group.valid &&
      this.getAnime(values.title, values.generos, values.status);
  }
  public getAnime(
    title?: string,
    genres?: string[],
    status: Array<number> = [0, 1]
  ) {
    this.loading = true;
    let params = new HttpParams()
      .set('page', this.pageIndex + 1)
      .set('per_page', this.pageSize)
      .set('sort_fields', 'score, start_date')
      .set('status', status.join(','))
      .set('sort_directions', '-1, -1');
    title && (params = params.set('title', title));
    genres && (params = params.set('genres', genres.join(',')));
    getData<Anime>(this.http, 'anime', params)
      .then((data) => {
        this.animes = data.list;
        this.count = data.count;
      })
      .finally(() => {
        this.loading = false;
      });
  }
  getPaginatorData = (event: PageEvent): PageEvent => {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.buscar();
    return event;
  };
}
