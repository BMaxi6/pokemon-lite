import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertantApiService } from 'src/app/services/certant-api/certant-api.service';

import { ViewPokemonComponent } from './view-pokemon.component';

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPokemonComponent ],
      imports: [HttpClientTestingModule],
      providers: [CertantApiService, HttpClient],
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
