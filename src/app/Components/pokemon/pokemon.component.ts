import { Component, OnInit } from '@angular/core';
import { CertantApiService } from '../../services/certant-api/certant-api.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  items = ''
  constructor( private api:CertantApiService ) {
    const items = this.api.getPokemonById(1);
   }

  ngOnInit(): void {
  }

}
