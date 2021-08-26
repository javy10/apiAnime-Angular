import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { DetalleAnimeComponent } from './detalle-anime/detalle-anime.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, DetalleAnimeComponent, CardDetalleComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class AnimeModule {}
