import { Injectable } from '@angular/core';
import { loginI, loginResponseI } from '../../models/login.interface'
import { pokemonI } from '../../models/pokemon.request.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { response } from '../../models/responses.interface'

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CertantApiService {

  url:string = "/api/";

  constructor(private http:HttpClient) { }

  loginByUsername(form:loginI):Observable<loginResponseI>{
    let direccion = this.url + "login";
    return this.http.post<loginResponseI>(direccion, form, httpOptions);;
  }

  getPokemonByUserId(id:string):Observable<pokemonI[]> {
    let direccion = this.url + "pokemon/" + id;
    return  this.http.get<pokemonI[]>(direccion, httpOptions);
  }

  editPokemonByUserId(){}

  addPokemonByUserId(){}

}
