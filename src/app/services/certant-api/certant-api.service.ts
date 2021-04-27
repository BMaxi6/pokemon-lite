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

  loginByUsername(form:loginI):Observable<response>{
    let direccion = this.url + "login";
    const answer = this.http.post<response>(direccion, form, httpOptions);
    answer.subscribe(value => console.log(value));
    return answer;
  }

  getPokemonByUserId(id:number):Observable<pokemonI[]> {
    let direccion = this.url + "pokemon/" + id;
    return  this.http.get<pokemonI[]>(direccion, httpOptions);
  }

  editPokemonByUserId(){}

  addPokemonByUserId(){}

}
