import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Anime } from '../../entidades/anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  anime: Anime = {} as Anime;
  animes: any[] = [];

  constructor(
    private http: HttpClient,
    private activatedRoiuter: ActivatedRoute,
    private router:Router
  ) {
    http
      .get<any>('https://api.aniapi.com/v1/anime/')
      .pipe(map((data) => data.data.documents))
      .subscribe((response) => {
        this.animes = response;
      });
  }

  ngOnInit(): void {}

  navigate(id:number){
    //do your any operations
    // this.router.navigate(['/detalle_anime/' + id]);
    this.router.navigateByUrl("/detalle_anime/"+id);
    }
}
