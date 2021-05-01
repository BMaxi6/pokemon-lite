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

  checkLocalStorage(){
    if(localStorage.getItem("userId")){
      this.api.getPokemonByUserId(localStorage.getItem('userId')).subscribe(
        data => localStorage.setItem('pokes',JSON.stringify(data))
      )
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
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
    form.id = Number(form.id);
    form.lvl = Number(form.lvl);
    }

  onSave(form:pokemonI){
    this.savePokemonDataInForm(form);
    let postPoke: newPokemonI; // ARREGLAR SETO
    postPoke.pokemon = form;
    postPoke.userId = Number(localStorage.getItem('userId'));
    this.api.addPokemonByUserId(postPoke).subscribe( data => {
      console.log(data);
    });
    this.router.navigate(['pokemons']);
  }
}
