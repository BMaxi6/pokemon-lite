import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';

import { ViewPokemonComponent } from './view-pokemon.component';

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPokemonComponent, routingComponents ],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      providers: [],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
