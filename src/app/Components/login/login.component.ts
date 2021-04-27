import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { loginI, loginResponseI } from '../../models/login.interface'
import { response } from '../../models/responses.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:CertantApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:loginI){
    this.api.loginByUsername(form).subscribe( data => {
      let dataResponse:response = data;
      if(dataResponse.code == 200){
        localStorage.setItem("userId", data.message.result.userId);
        this.router.navigate(['pokemons']);
      } else {
        console.log("Usuario o contraseña incorrecta");
      }
    });
  }

}
