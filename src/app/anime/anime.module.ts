import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';

@NgModule({
  declarations: [HomeComponent, DetalleAnimeComponent],
  imports: [CommonModule, MaterialModule, RouterModule],

})
export class AnimeModule {}
