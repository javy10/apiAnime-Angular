import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../../entidades/anime';
import { getData } from '../request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  animes: Anime[] = [];
  count: number = 0;
  loading: boolean = false;
  constructor(
    private http: HttpClient,
    private activatedRoiuter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAnime();
  }

  navigate(id: number) {
    this.router.navigateByUrl('/detalle_anime/' + id);
  }

  getAnime(
    pageIndex: number = 0,
    pageSize: number = 10,
    title?: string,
    year?: number,
    genres?: string[]
  ) {
    this.loading = true;
    let params = new HttpParams()
      .set('page', pageIndex + 1)
      .set('per_page', pageSize);
    title && (params = params.set('title', title));
    year && (params = params.set('year', year));
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
    this.getAnime(event.pageIndex, event.pageSize);
    return event;
  };
}
