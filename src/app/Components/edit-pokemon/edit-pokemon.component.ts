import { Component, OnInit } from '@angular/core';
import { abilitiesI, evolutionI, pokemonI } from 'src/app/models/pokemon.request.interface'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemon:pokemonI = {'name':'Maxi','id':0,'lvl':0,'abilities':[], evolutionId: 0};
  abilities:abilitiesI[] = [];
  evolutions:evolutionI[] = [];
  cantAbilities:number;
  cantEvolutions:number;

  constructor( private api:CertantApiService, private router:Router ) {
    
   }

  ngOnInit(): void {
    if(localStorage.getItem("userId")){
      // CARGAR CARTA
      this.pokemon.name = "Charmander";
      this.pokemon.id = 7;
      this.pokemon.lvl = 4;
      this.abilities.push({'name':'fueguito','description':'Tira fueguito por la boca'});
      this.abilities.push({'name':'fueguito','description':'Tira fueguito por la boca'});
      this.abilities.push({'name':'fueguito','description':'Tira fueguito por la boca'});
      this.pokemon.abilities = this.abilities;
      this.cantAbilities = this.abilities.length;
      this.cantEvolutions = this.evolutions.length;
    } else {
      this.router.navigate(['login']);
    }
  }

}

