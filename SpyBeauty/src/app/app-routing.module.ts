
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
import { TipoCadastroComponent } from './pages/tipo-cadastro/tipo-cadastro.component';
import { CadastroclientesComponent } from './pages/cadastroclientes/cadastroclientes.component';
import { AuthGuard } from './serv/auth.guard';
import { MeusencontrosComponent } from './pages/meusencontros/meusencontros.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';




const routes: Routes = [  
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "home", component:HomepageComponent, canActivate: [AuthGuard]},
  {path: "login", component:AppLoginComponent},
  {path: "agendamento/:id", component:AgendamentoComponent, canActivate: [AuthGuard]},   
  {path: "servicos", component:ServicosComponent, canActivate: [AuthGuard]},
  {path: "addProfissional", component:AddProfissionalComponent},
  {path: "Profissionais", component:ProfissionaisComponent, canActivate: [AuthGuard]},
  {path: "perfilProfissional/:id", component:PerfilProfComponent, canActivate: [AuthGuard]}, 
  {path: "tipoCadastro", component:TipoCadastroComponent},  
  {path: "addCliente", component:CadastroclientesComponent},  
  {path: "encontros", component:MeusencontrosComponent}, 
  {path: "galeria", component:GaleriaComponent}, 
  {path: "sobrenos", component:SobrenosComponent}, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
