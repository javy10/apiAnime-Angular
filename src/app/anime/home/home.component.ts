import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { Anime } from '../entidades/anime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  gridColumns = 4;
  panelOpenState = false;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 4 ? 5 : 4;
  }

  anime:Anime = {} as Anime;
  animes:any [] = [];

  constructor(private http: HttpClient, 
    private activatedRoiuter:ActivatedRoute) { 
   
      http.get<any>('https://api.aniapi.com/v1/anime/')
      .pipe(map(data => data.data.documents))
      .subscribe(response=>{this.animes=response});
  
      console.log(this.animes);
  }

  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DetalleAnimeComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}
