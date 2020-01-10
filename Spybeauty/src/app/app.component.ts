import { Component } from '@angular/core';
import { AuthService } from './serv/auth.service';
import { Observable } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpyBeauty'; 
constructor(public authService: AuthService){
  
}
logout(){
  window.localStorage.setItem("nome", "")
  this.authService.logout();
}





}
