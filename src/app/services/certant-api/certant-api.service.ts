import { Injectable } from '@angular/core';
import { loginI, loginResponseI } from '../../models/login.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { response } from '../../models/responses.interface'
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CertantApiService {

  url:string = "https://testing.certant.com/pokedex-api/";

  constructor(private http:HttpClient) { }

  loginByUsername(form:loginI):Observable<response>{
    let direccion = this.url + "login";
    return this.http.post<response>(direccion, form);
  }

  getPokemonById(id:number):Observable<response> {
    let direccion = this.url + "pokemon/" + id;
    const pokemons = this.http.get<response>(direccion);
    pokemons.subscribe(value => console.log(value));
    return pokemons;
  }

}
