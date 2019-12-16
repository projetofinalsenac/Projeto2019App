import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';
import { PerfilProfComponent } from './pages/perfil-prof/perfil-prof.component';



const routes: Routes = [  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomepageComponent},
  {path: "login", component:AppLoginComponent},
  {path: "agendamento", component:AgendamentoComponent},   
  {path: "servicos", component:ServicosComponent},
  {path: "addProfissional", component:AddProfissionalComponent},
  {path: "Profissionais", component:ProfissionaisComponent},
  {path: "perfilProfissional/:id", component:PerfilProfComponent},       
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
