import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {routingComponents, routes} from './app-routing.module'
import { AppModule } from './app.module';


    let location: Location;
    let router: Router;
    let fixture;

    describe('Routing Component', () => {

    beforeAll(() => {
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
        localStorage.removeItem('userId');
    });
    
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), AppModule],
            declarations: [
                routingComponents
            ],
            providers: [Router],
        }).compileComponents();
    });

    it('navigate to "" redirects you to "login"', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/login');  
    }))
  
});
