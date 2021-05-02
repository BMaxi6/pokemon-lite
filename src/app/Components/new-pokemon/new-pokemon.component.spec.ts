import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';
import { abilitiesI, newPokemonI, pokemonI } from 'src/app/models/pokemon.request.interface';
import { NewPokemonComponent } from './new-pokemon.component';

describe('NewPokemonComponent', () => {
  let component: NewPokemonComponent;
  let fixture: ComponentFixture<NewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [ NewPokemonComponent, routingComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new ability', () => {
    let ability:abilitiesI = {'name': 'Impactrueno', 'description': 'Un trueno que va hacia el enemigo'};
    let ability2:abilitiesI = {'name': 'Pika Pika', 'description': 'Despista al enemigo con su ternura'};
    component.onSaveAbility(ability);
    component.onSaveAbility(ability2);
    expect(component.cantAbilities).toBe(2);
    expect(component.abilites.length).toBe(2);
    expect(component.abilites.find( abilitie => abilitie.name == 'Impactrueno')).toEqual(ability);
  })

  it('should add a new pokemon without evolution', () => {
    let ability:abilitiesI = {'name': 'Impactrueno', 'description': 'Un trueno que va hacia el enemigo'};
    let ability2:abilitiesI = {'name': 'Pika Pika', 'description': 'Despista al enemigo con su ternura'};
    component.abilites.push(ability);
    component.abilites.push(ability2);

    component.evolutionId = 0;

    let form:pokemonI = {name: 'Pikachu', evolutionId: null, abilities: null, lvl: 15, id:null};
    component.savePokemonDataInForm(form);
    expect(form.abilities.length).toBe(2);
    expect(form.evolutionId).toBe(null);
    expect(form.abilities.find( abilitie => abilitie.name == 'Impactrueno')).toEqual(ability);
  })

  it('should add a new pokemon with evolution', () => {
    let ability:abilitiesI = {'name': 'Impactrueno', 'description': 'Un trueno que va hacia el enemigo'};
    let ability2:abilitiesI = {'name': 'Pika Pika', 'description': 'Despista al enemigo con su ternura'};
    component.abilites.push(ability);
    component.abilites.push(ability2);

    component.evolutionId = 1;

    let form:pokemonI = {name: 'Pikachu', evolutionId: null, abilities: null, lvl: 15, id:null};
    component.savePokemonDataInForm(form);
    expect(form.abilities.length).toBe(2);
    expect(form.evolutionId).toBe(1);
    expect(form.abilities.find( abilitie => abilitie.name == 'Impactrueno')).toEqual(ability);
  })


});
