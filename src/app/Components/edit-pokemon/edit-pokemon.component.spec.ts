import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';
import { pokemonI } from 'src/app/models/pokemon.request.interface';

import { EditPokemonComponent } from './edit-pokemon.component';

describe('EditPokemonComponent', () => {
  let component: EditPokemonComponent;
  let fixture: ComponentFixture<EditPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes) ,HttpClientTestingModule],
      declarations: [ EditPokemonComponent, routingComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    //localStorage.setItem('userId','1');
    fixture = TestBed.createComponent(EditPokemonComponent);
    fixture.detectChanges();
    //localStorage.removeItem('userId');
  });

  it('should create', () => {
    /*
    let pokemon:pokemonI = {'name': 'Pikachu', 'id': 2, 'abilities': [], 'evolutionId': 3, 'lvl': 15};
    let pokemons:pokemonI[] = [];
    pokemons.push(pokemon);
    localStorage.setItem('pokes', JSON.stringify(pokemons));
    localStorage.setItem('editPokemon', JSON.stringify(pokemon));
    component.pokemon = pokemon;
    */
    expect(component).toBeTruthy();
  });
});
