import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './Components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomepageComponent,
    AgendamentoComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
