import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { abilitiesI, newPokemonI, pokemonI } from '../../models/pokemon.request.interface'
import { Router } from '@angular/router'


@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  profile = {'name': '','description':''};
  abilites:abilitiesI[] = [];
  cantAbilities = 0;
  pokemon:pokemonI;
  pokemons:pokemonI[];
  evolutionId;

  newPokeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    evolutionId: new FormControl(null, Validators.required),
    lvl: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    abilities: new FormControl('', Validators.required),
  })

  newAbilityForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(null, Validators.required),
  })

  constructor(private api:CertantApiService, private router:Router) { }

  checkLocalStorage(){
    if(localStorage.getItem("userId")){
      if(localStorage.getItem('pokes') && localStorage.getItem('editPokemon')){
        this.api.getPokemonByUserId(localStorage.getItem('userId')).subscribe(
          data => localStorage.setItem('pokes',JSON.stringify(data))
        )
        this.pokemon = JSON.parse( localStorage.getItem('editPokemon') );
        localStorage.removeItem('editPokemon');
        this.pokemons = JSON.parse(localStorage.getItem('pokes'));
        localStorage.removeItem('pokes');
      } else {
        this.router.navigate(['pokemons']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.newPokeForm.get('name').setValue(this.pokemon.name);
    this.newPokeForm.get('evolutionId').setValue(this.pokemon.evolutionId);
    this.newPokeForm.get('lvl').setValue(this.pokemon.lvl);
    this.newPokeForm.get('id').setValue(this.pokemon.id);
    this.abilites= this.pokemon.abilities;
    this.cantAbilities = this.pokemon.abilities.length;
  }

  onSaveAbility(form:abilitiesI){
    this.abilites.push(form);
    this.cantAbilities++;
    this.newAbilityForm.reset(this.profile);
  }

  onSave(form:pokemonI){
    form.abilities = this.abilites;
    form.evolutionId = this.checkEvolutionId(this.evolutionId);
    form.id = Number(form.id);
    form.lvl = Number(form.lvl);
    this.api.editPokemon(form).subscribe( data => {
      console.log(data);
    });
    this.router.navigate(['pokemons']);
  }

  checkEvolutionId(id:number):number{
    if(id == undefined){
      return this.pokemon.evolutionId;
    }
    if(id == 0){
      return null;
    }
    return Number(id);
  }

}
