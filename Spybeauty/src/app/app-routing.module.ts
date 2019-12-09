import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './pages/app-login/app-login.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AddProfissionalComponent } from './pages/add-profissional/add-profissional.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';



const routes: Routes = [  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomepageComponent},
  {path: "login", component:AppLoginComponent},
  {path: "agendamento", component:AgendamentoComponent},   
  {path: "servicos", component:ServicosComponent},
  {path: "addProfissional", component:AddProfissionalComponent},
  {path: "Profissionais", component:ProfissionaisComponent},    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
