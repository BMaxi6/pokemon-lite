import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { EditPokemonComponent } from './Components/edit-pokemon/edit-pokemon.component';
import { LoginComponent } from './Components/login/login.component';
import { GuardLoginService } from './services/guard-login/guard-login.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    EditPokemonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [GuardLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
