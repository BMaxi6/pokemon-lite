import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './Components/login/login.component'
import {PokemonComponent} from './Components/pokemon/pokemon.component'
import {NewPokemonComponent} from './Components/new-pokemon/new-pokemon.component'
import {ViewPokemonComponent} from './Components/view-pokemon/view-pokemon.component'
import {EditPokemonComponent} from './Components/edit-pokemon/edit-pokemon.component'

export const routes: Routes = [
  { path: '' , redirectTo: 'login' , pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'pokemons', component: PokemonComponent},
  { path: 'newPokemon', component: NewPokemonComponent},
  { path: 'pokemon/:id', component: ViewPokemonComponent},
  { path: 'edit', component: EditPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, PokemonComponent, NewPokemonComponent, ViewPokemonComponent, EditPokemonComponent]