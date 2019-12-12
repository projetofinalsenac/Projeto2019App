import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeCardComponent } from './pages/home-card/home-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {  map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PerfilProfComponent } from './pages/perfil-prof/perfil-prof.component';
import { AngularFireDatabase } from '@angular/fire/database';

>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7


@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomepageComponent,
<<<<<<< HEAD
    AgendamentoComponent,
    HomeCardComponent,
    ServicosComponent
=======
    AgendamentoComponent,    
    ServicosComponent, AddProfissionalComponent, ProfissionaisComponent, PerfilProfComponent    
>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [AngularFirestore, AngularFireAuth],
=======
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireAuthModule,
   AngularFireStorageModule,
   AngularFirestoreModule,
   FormsModule,
   
  
  ],
  providers: [AngularFireAuthModule,AngularFireModule, AngularFireStorageModule, AngularFireDatabase],
>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7
  bootstrap: [AppComponent]
})
export class AppModule { }
