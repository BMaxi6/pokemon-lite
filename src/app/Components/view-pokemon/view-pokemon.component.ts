import { Component, OnInit } from '@angular/core';
import { abilitiesI, pokemonI } from 'src/app/models/pokemon.request.interface'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent implements OnInit {

  pokemon:pokemonI;
  pokemons: pokemonI[];
  abilities:abilitiesI[];
  evolution:pokemonI;
  evolutions:pokemonI[];

  id:number;

  constructor( private api:CertantApiService, private router:Router, public route: ActivatedRoute ) { 
  }

  findPokemonByID(id:number):pokemonI{
    return JSON.parse(localStorage.getItem('pokes')).find( poke => poke.id == id);
  }

  findPokemonEvolutionById(id:number):pokemonI{
    let evId = this.findPokemonByID(id).evolutionId;
    return this.findPokemonByID(evId);
  }

  findPokemonEvolutionsById(id:number):pokemonI[]{
    let pokemons:pokemonI[] = [];
    let pokemonAux:pokemonI;
    pokemonAux = this.findPokemonEvolutionById(id);
    while(pokemonAux != undefined){
      pokemons.push(pokemonAux);
      pokemonAux = this.findPokemonEvolutionById(pokemonAux.id);
    } 
    return pokemons;
  }

  toEdit(){
    localStorage.setItem('editPokemon', JSON.stringify(this.pokemon));
    this.router.navigate(['edit']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.api.getPokemonByUserId(localStorage.getItem('userId')).subscribe( data => localStorage.setItem('pokes', JSON.stringify(data)));
    this.pokemon = this.findPokemonByID(this.id);
    this.abilities = this.pokemon.abilities;
    this.evolution = this.findPokemonEvolutionById(this.id);
    this.evolutions = this.findPokemonEvolutionsById(this.id);
  }

  ngOnDestroy(): void {
    //localStorage.removeItem('pokes')
  }

}