import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RatingModule,
  ],
})
export class AnimeModule {}
