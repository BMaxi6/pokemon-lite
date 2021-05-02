import { TestBed, fakeAsync, tick, async, ComponentFixture } from '@angular/core/testing';
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component';

import {routingComponents, routes} from './app-routing.module'
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
            router.initialNavigation();
            localStorage.setItem('userId', '1');
        })

        it('navigate to "" should redirects you to "login"', fakeAsync(() => {
            localStorage.removeItem('userId');
            router.navigate(['']);
            tick();
            expect(location.path()).toBe('/login');  
        }))

        it('navigate to "/pokemons" should be in pokemon component if you have userId', fakeAsync(() => {
            router.navigate(['pokemons']);
            tick();
            expect(location.path()).toBe('/pokemons');
            expect(component.title).toBe('AppComponent')
        }))

        afterAll(() => {
            localStorage.removeItem('userId');
            localStorage.setItem('userId', helperUserId);
        })

});
