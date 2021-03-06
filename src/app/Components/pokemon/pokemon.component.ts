import { Component, OnInit } from '@angular/core';
import { pokemonI } from 'src/app/models/pokemon.request.interface'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons:pokemonI[];

  constructor( private api:CertantApiService, private router:Router ) {
   }

  ngOnInit(): void {
      this.api.getPokemonByUserId(localStorage.getItem('userId')).subscribe( data => this.pokemons = data); 
  }
}