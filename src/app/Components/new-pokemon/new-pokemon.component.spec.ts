import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';
import { NewPokemonComponent } from './new-pokemon.component';

describe('NewPokemonComponent', () => {
  let component: NewPokemonComponent;
  let fixture: ComponentFixture<NewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [ NewPokemonComponent, routingComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
