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
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {  map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PerfilProfComponent } from './pages/perfil-prof/perfil-prof.component';
import { AngularFireDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomepageComponent,
    AgendamentoComponent,    
    ServicosComponent, AddProfissionalComponent, ProfissionaisComponent, PerfilProfComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireAuthModule,
   AngularFireStorageModule,
   AngularFirestoreModule,
   FormsModule,  
  ],
  providers: [AngularFirestoreDocument, AngularFireAuthModule,AngularFireModule, AngularFireStorageModule, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
