import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomepageComponent,
    AgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
