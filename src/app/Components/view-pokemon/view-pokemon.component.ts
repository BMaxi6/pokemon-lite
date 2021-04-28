import { Component, OnInit } from '@angular/core';
import { abilitiesI, evolutionI, pokemonI } from 'src/app/models/pokemon.request.interface'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent implements OnInit {

  pokemon:pokemonI;
  abilities:abilitiesI[];
  evolutions:evolutionI[];
  cantAbilities:number=0;
  cantEvolutions:number=0;

  id:number;

  constructor( private api:CertantApiService, private router:Router, private route: ActivatedRoute ) { 
  }

  findPokemon(pokemons:Observable<pokemonI[]>){
    pokemons.subscribe(
      data => this.pokemon = data.find (
        poke => poke.id == this.id
      )
    );
    pokemons.subscribe(
      data => this.abilities = data.find (
        poke => poke.id == this.id
      ).abilities
    );
    console.log(this.abilities);
    this.cantAbilities = this.abilities.length;
    this.cantEvolutions = this.evolutions.length;
  }

  ngOnInit(): void {
    if(localStorage.getItem("userId")){
      this.id = this.route.snapshot.params.id;
      let response = this.api.getPokemonByUserId(localStorage.getItem('userId'))
      this.findPokemon(response);
      // CARGAR EVOLUCIONES
      
       
    } else {
      this.router.navigate(['login']);
    }
  }
}

