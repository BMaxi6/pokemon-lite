import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;

  logOut(){
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

}
