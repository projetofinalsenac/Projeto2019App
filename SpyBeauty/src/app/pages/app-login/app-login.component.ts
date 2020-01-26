import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';
import { Profissional } from 'src/app/modelo/profissional';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  public email: string;
  public senha: string;
  public username: string;
  logged: boolean = false;
  constructor(
    public authservice: AuthService,
    protected routes: Router
  ) { }

  ngOnInit() {
  }
  login(){
    this.authservice.login(this.email, this.senha);
  }
}
