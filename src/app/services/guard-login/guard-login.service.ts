import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class GuardLoginService implements CanActivate {
  constructor( private router: Router) { }

  isLogged(){
    return localStorage.getItem('userId');
  }

  canActivate() {
      if (!this.isLogged()) {
        console.log('No esta logeado');
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }
}