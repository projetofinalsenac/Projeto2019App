import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { ProfissionalServiceService } from './profissional-service.service';
import { ClienteserviceService } from './clienteservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userinfo: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
   

  ) {
    this.user = afAuth.authState;   
    
  }
  

  signup(email: string, password: string, nome: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      res => {        
        res.user.updateProfile({
          displayName: nome,
        });  
                          
        this.router.navigate(['/home']);
      },
      err => {
        console.log('Wrong', err);
      }

    )
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        
        this.userinfo = res.user.displayName;

        window.localStorage.setItem('nome', this.userinfo);

        console.log(res.user);

        this.router.navigate(['/home']);
      },
      err => {
        console.log('something went wrong' + err);
        alert("algo deu errado, confira os campos")
        this.router.navigate(['/login'])
      }
    )
  }

  logout() {
    this.afAuth.auth.signOut(); 
    this.router.navigate(['login']); 
  }

  
}
