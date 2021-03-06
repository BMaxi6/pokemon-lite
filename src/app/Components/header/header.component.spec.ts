import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes, routingComponents } from 'src/app/app-routing.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [ HeaderComponent, routingComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    localStorage.setItem('username', 'Certant');
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should greeting like "Hola, Certant"', () => {
    const span = fixture.debugElement.nativeElement.querySelector('span');
    expect(span.textContent).toContain('Certant')
  })

  afterAll(()=> {
    localStorage.removeItem('username');
  })

});
