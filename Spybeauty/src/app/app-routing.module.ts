import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './pages/app-login/app-login.component';



const routes: Routes = [  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component:HomepageComponent},
  {path: "login", component:AppLoginComponent},
  {path: "agendamento", component:AgendamentoComponent}, 
  {path: "**", component:HomepageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }