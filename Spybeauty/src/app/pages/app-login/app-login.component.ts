import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import {FormsModule } from "@angular/forms";
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  protected email: string = "";
  protected pws: string = "";

  constructor(
    public afAuth: AngularFireAuth
  ) { }



  ngOnInit() {
  }

  onsubmit(form) {
    this.login();
  }

  login() {
       this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pws).then(
      res => {
        console.log(res.user);
       
      },
      erro => {
        console.log("Erro: " + erro);
        
      }
    ).catch(erro => {
      console.log("Erro no sistema: " + erro);
    
  })
}
  logout() {
    this.afAuth.auth.signOut();
  }
}

