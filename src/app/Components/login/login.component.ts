import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { loginI } from '../../models/login.interface'
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

  checkLocalStorage(){
    if(localStorage.getItem("userId")){
      this.router.navigate(['pokemons']);
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  onLogin(form:loginI){
    this.api.loginByUsername(form).subscribe( data => {
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      this.router.navigate(['pokemons']);
    });
  }

}
