import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './pages/app-login/app-login.component';
<<<<<<< HEAD
import { HomeCardComponent } from './pages/home-card/home-card.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
=======
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
import { PerfilProfComponent } from './pages/perfil-prof/perfil-prof.component';

>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7


const routes: Routes = [  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomepageComponent},
  {path: "login", component:AppLoginComponent},
<<<<<<< HEAD
  {path: "agendamento", component:AgendamentoComponent}, 
  
  {path: 'card', component: HomeCardComponent},
  {path: 'serv', component: ServicosComponent}
=======
  {path: "agendamento", component:AgendamentoComponent},   
  {path: "servicos", component:ServicosComponent},
  {path: "addProfissional", component:AddProfissionalComponent},
  {path: "Profissionais", component:ProfissionaisComponent},
  {path: "perfil", component:PerfilProfComponent},       
>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
