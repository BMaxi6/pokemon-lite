import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';
import { Location } from '@angular/common'

import { GuardLoginService } from '../guard-login/guard-login.service';

describe('GuardLoginService', () => {
  let service: GuardLoginService;
  let location: Location;
  let router: Router;
  let helperUserId;
  
  beforeAll(() => {
      helperUserId = localStorage.getItem('userId');
      localStorage.removeItem('userId');
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
                declarations: [
                    routingComponents
                ],
                providers: [GuardLoginService],
    });
    service = TestBed.inject(GuardLoginService);
  });

  beforeEach( () => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
})

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('navigate to "/pokemons" should redirects you to "login" if you dont have userId', fakeAsync(() => {
      router.navigate(['pokemons']);
      tick();
      expect(location.path()).toBe('/login');  
  }))

  it('navigate to "/newPokemon" should redirects you to "login" if you dont have userId', fakeAsync(() => {
    router.navigate(['newPokemon']);
    tick();
    expect(location.path()).toBe('/login');  
  }))

  it('navigate to "/pokemon/1" should redirects you to "login" if you dont have userId', fakeAsync(() => {
    router.navigate(['pokemon/1']);
    tick();
    expect(location.path()).toBe('/login');  
  }))

  it('navigate to "/edit" should redirects you to "login" if you dont have userId', fakeAsync(() => {
    router.navigate(['edit']);
    tick();
    expect(location.path()).toBe('/login');  
  }))

  afterAll(() => {
      localStorage.setItem('userId', helperUserId);
  })

});
