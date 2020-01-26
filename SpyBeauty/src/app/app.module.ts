import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
//firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { PerfilProfComponent } from './pages/perfil-prof/perfil-prof.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './serv/auth.service';
import { TipoCadastroComponent } from './pages/tipo-cadastro/tipo-cadastro.component';
import {RouterModule, Routes} from '@angular/router';
import { CadastroclientesComponent } from './pages/cadastroclientes/cadastroclientes.component'
import { AuthGuard } from './serv/auth.guard';
import { MeusencontrosComponent } from './pages/meusencontros/meusencontros.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';

import {SobrenosComponent} from './pages/sobrenos/sobrenos.component';




@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    HomepageComponent,
    AgendamentoComponent,    
    ServicosComponent, 
    AddProfissionalComponent, 
    ProfissionaisComponent, 
    PerfilProfComponent, 
    TipoCadastroComponent, 
    CadastroclientesComponent, 
    MeusencontrosComponent ,
    GaleriaComponent,
    SobrenosComponent   
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
    AngularFireDatabaseModule
  ],
  providers: [  AuthService,AngularFireAuthModule,AngularFireModule, AngularFireStorageModule, AngularFireDatabaseModule, AngularFireAuthModule, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
