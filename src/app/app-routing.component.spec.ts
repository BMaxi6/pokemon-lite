import { TestBed, fakeAsync, tick, async, ComponentFixture } from '@angular/core/testing';
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {routingComponents, routes} from './app-routing.module'
import { AppModule } from './app.module';
import { DebugElement } from '@angular/core';
import { GuardLoginService } from './services/guard-login/guard-login.service';

    describe('Routing Component', () => {

        let location: Location;
        let router: Router;
        let component: AppComponent;
        let fixture: ComponentFixture<AppComponent>;
        let helperUserId;
        
        beforeAll(() => {
            helperUserId = localStorage.getItem('userId');
            localStorage.removeItem('userId');
        })

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [RouterTestingModule.withRoutes(routes)],
                declarations: [
                    routingComponents
                ],
                providers: [GuardLoginService],
            }).compileComponents();
        });

        beforeEach( () => {
            router = TestBed.inject(Router);
            location = TestBed.inject(Location);
            fixture = TestBed.createComponent(AppComponent);
            router.initialNavigation();
            localStorage.removeItem('userId');
        })

        it('navigate to "" should redirects you to "login"', fakeAsync(() => {
            router.navigate(['']);
            tick();
            expect(location.path()).toBe('/login');  
        }))

        it('navigate to "/pokemons" should redirects you to "login" if you dont have userId', fakeAsync(() => {
            router.navigate(['pokemons']);
            tick();
            expect(location.path()).toBe('/login');  
        }))

        it('navigate to "/pokemons" should stay in "/pokemons" if you have userId', fakeAsync(() => {
            localStorage.setItem('userId', '1');
            router.navigate(['pokemons']);
            tick();
            localStorage.removeItem('userId');
            expect(location.path()).toBe('/pokemons');
        }))

        afterAll(() => {
            localStorage.setItem('userId', helperUserId);
        })
  
});
