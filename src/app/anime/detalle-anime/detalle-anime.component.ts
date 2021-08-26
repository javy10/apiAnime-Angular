import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Episode } from 'src/app/entidades/episode';
import { getData } from '../request';

@Component({
  selector: 'app-detalle-anime',
  templateUrl: './detalle-anime.component.html',
  styleUrls: ['./detalle-anime.component.sass'],
})
export class DetalleAnimeComponent implements OnInit {

  loading!: boolean;
  episodes!: Episode[];
  count!: number;

  constructor(private http: HttpClient, private router: Router) {
    const paramsid = this.router.url.split("/")[2]
    console.log(this.router);
    this.getEpisode(paramsid);
  }

  ngOnInit(): void {
    
  }

  public getEpisode(id: string) {
    this.loading = true;
    let params = new HttpParams()
    id && (params = params.set('anime_id', id));
    getData<Episode>(this.http, 'episode', params)
      .then((data) => {
        this.episodes = data.list;
        this.count = data.count;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
