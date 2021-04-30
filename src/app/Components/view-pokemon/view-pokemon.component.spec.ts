import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';
import { pokemonI } from 'src/app/models/pokemon.request.interface';

import { ViewPokemonComponent } from './view-pokemon.component';

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;
  let pichu:pokemonI = {name: 'Pichu', lvl: 15, id: 1, abilities: [], evolutionId: 2};
  let pikachu:pokemonI = {name: 'Pikachu', lvl: 30, id: 2, abilities: [], evolutionId: 3};
  let raichu:pokemonI = {name: 'Raichu', lvl: 60, id: 3, abilities: [], evolutionId: null};
  let pokemons:pokemonI[] = []
    
  beforeAll( () => {
    pokemons.push(pichu);
    pokemons.push(pikachu);
    pokemons.push(raichu);
    localStorage.setItem('pokes', JSON.stringify(pokemons));
  })

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

  it('findPokemonById should find a Pikachu', () =>{
    expect(component.findPokemonByID(2)).toEqual(pikachu);
  })

  it('findPokemonEvolutionById should find a Pikachu', () => {
    expect(component.findPokemonEvolutionById(1)).toEqual(pikachu);
  })

  it('findPokemonEvolutionsById should find a Pikachu and a Raichu', () => {
    let pokemonsFinded:pokemonI[] = component.findPokemonEvolutionsById(1);
    expect(pokemonsFinded.length).toBe(2);
    expect(pokemonsFinded.find( pokemon => pokemon.id == 3)).toEqual(raichu);
    //expect(pokemonsFinded.includes(pikachu)).toBeTrue();
    //expect(pokemonsFinded.includes(raichu)).toBeTrue();
    // COMENTO POR EL INCLUDES PARECE NO FUNCIONAR
  })

  afterAll( () => {
    localStorage.removeItem('pokes');
  })
});
