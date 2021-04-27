import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from 'src/app/models/responses.interface';
import { pokemonI } from 'src/app/models/pokemon.request.interface'
import { CertantApiService } from '../../services/certant-api/certant-api.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons:pokemonI[];
  
  constructor( private api:CertantApiService ) {
   }

  ngOnInit(): void {
    this.api.getPokemonByUserId(1).subscribe( data => this.pokemons = data)
  }

}
