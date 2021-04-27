import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { CertantApiService } from '../../services/certant-api/certant-api.service'
import { loginI } from '../../models/login.interface'

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

  constructor(private api:CertantApiService) { }

  ngOnInit(): void {
  }

  onLogin(form:loginI){
    this.api.loginByUsername(form).subscribe( data => {
      console.log(data);
    });
  }

}
