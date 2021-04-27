import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { newPokemonI } from '../../models/pokemon.request.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.css']
})
export class NewPokemonComponent implements OnInit {

  newPokeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    evolutionId: new FormControl(null, Validators.required),
    lvl: new FormControl('', Validators.required),
    id: new FormControl(localStorage.getItem('userId'), Validators.required),
    // ABILITIES Y 
  })

  constructor(private api:CertantApiService, private router:Router) { }

  checkLocalStorage(){
    if(localStorage.getItem("userId")){
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  onSave(form:newPokemonI){
    console.log(form.name)
    /*
    this.api.addPokemonByUserId(form).subscribe( data => {
      console.log(data);
    });
    */
  }

}
