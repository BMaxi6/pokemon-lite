import { TestBed, fakeAsync, tick, async, ComponentFixture } from '@angular/core/testing';
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component';

import {routingComponents, routes} from './app-routing.module'
import { GuardLoginService } from './services/guard-login/guard-login.service';
import { PokemonComponent } from './Components/pokemon/pokemon.component';
import { NewPokemonComponent } from './Components/new-pokemon/new-pokemon.component';
import { ViewPokemonComponent } from './Components/view-pokemon/view-pokemon.component';
import { EditPokemonComponent } from './Components/edit-pokemon/edit-pokemon.component';

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
            //expect(router.getCurrentNavigation().extras.relativeTo.component).toEqual(PokemonComponent);
            // Leyendo descrubri que esto solo se puede acceder en el constructor
            //no encontre forma de llegar al componente
        }))

        it('navigate to "/newPokemon" should be in pokemon component if you have userId', fakeAsync(() => {
            router.navigate(['newPokemon']);
            tick();
            expect(location.path()).toBe('/newPokemon');
            //expect(router.getCurrentNavigation().extras.relativeTo.component).toEqual(NewPokemonComponent);
        }))

        it('navigate to "/pokemon/1" should be in pokemon component if you have userId', fakeAsync(() => {
            router.navigate(['pokemon/1']);
            tick();
            expect(location.path()).toBe('/pokemon/1');
            //expect(router.getCurrentNavigation().extras.relativeTo.component).toEqual(ViewPokemonComponent);
        }))

        it('navigate to "/edit" should be in pokemon component if you have userId', fakeAsync(() => {
            router.navigate(['edit']);
            tick();
            expect(location.path()).toBe('/edit');
            //expect(router.getCurrentNavigation().extras.relativeTo.component).toEqual(EditPokemonComponent);
        }))

        afterAll(() => {
            localStorage.removeItem('userId');
            localStorage.setItem('userId', helperUserId);
        })

});
