import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAnimeComponent } from './detalle-anime.component';

describe('DetalleAnimeComponent', () => {
  let component: DetalleAnimeComponent;
  let fixture: ComponentFixture<DetalleAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
