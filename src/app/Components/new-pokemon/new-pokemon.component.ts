import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { abilitiesI, newPokemonI, pokemonI } from '../../models/pokemon.request.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.css']
})
export class NewPokemonComponent implements OnInit {

  profile = {'name': '','description':''};
  abilites:abilitiesI[] = [];
  cantAbilities = 0;
  pokemons:pokemonI[];
  evolutionId;

  newPokeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    evolutionId: new FormControl(null, Validators.required),
    lvl: new FormControl('', Validators.required),
    id: new FormControl(null),
    abilities: new FormControl('', Validators.required),
  })

  newAbilityForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(null, Validators.required),
  })

  constructor(private api:CertantApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getPokemonByUserId(localStorage.getItem('userId')).subscribe(
      data => localStorage.setItem('pokes',JSON.stringify(data))
    )
    this.pokemons = JSON.parse(localStorage.getItem('pokes'));
    localStorage.removeItem('pokes');
  }

  onSaveAbility(form:abilitiesI){
    this.abilites.push(form);
    this.cantAbilities++;
    this.newAbilityForm.reset(this.profile);
  }

  savePokemonDataInForm(form:pokemonI){
    form.abilities = this.abilites;
    if(this.evolutionId > 0) {
      form.evolutionId = Number(this.evolutionId);
    }
    form.lvl = Number(form.lvl);
    }

  onSave(form:pokemonI){
    this.savePokemonDataInForm(form);
    let postPoke: newPokemonI = {
      pokemon:{name:'', evolutionId:null, abilities:[], id:null, lvl: 0},
      userId: ''
    };
    postPoke.pokemon = form;
    postPoke.pokemon.id = 7;
    postPoke.userId = localStorage.getItem('userId');
    console.log(postPoke.pokemon.evolutionId);
    this.api.addPokemonByUserId(postPoke).subscribe( data => {
      console.log(data);
    });
    //this.router.navigate(['pokemons']);
  }
}
