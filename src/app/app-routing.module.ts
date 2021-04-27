import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './Components/login/login.component'
import {PokemonComponent} from './Components/pokemon/pokemon.component'
import {NewPokemonComponent} from './Components/new-pokemon/new-pokemon.component'
import {EditPokemonComponent} from './Components/edit-pokemon/edit-pokemon.component'

const routes: Routes = [
  { path: '' , redirectTo: 'login' , pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'pokemons', component: PokemonComponent},
  { path: 'newPokemon', component: NewPokemonComponent},
  { path: 'changePokemon', component: EditPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, PokemonComponent, NewPokemonComponent, EditPokemonComponent]