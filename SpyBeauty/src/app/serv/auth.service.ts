import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { ProfissionalServiceService } from './profissional-service.service';
import { ClienteserviceService } from './clienteservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agendamento } from '../modelo/agendamento';
import { Profissional } from '../modelo/profissional';
import { Cliente } from '../modelo/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public prof: Observable<any[]>
  public cli: Observable<any[]>
  
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore

  ) {
    this.user = afAuth.authState;

  }


  signup(email: string, password: string, nome: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      res => {
        res.user.updateProfile({
          displayName: nome,
        });
        this.router.navigate(['/login']);
      },
      err => {
        console.log('Wrong', err);
      }

    )
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => {
        this.router.navigate(['home']);
        window.localStorage.setItem("UserEmail", email);

      },
      err => {
        console.log('something went wrong' + err);
        alert("algo deu errado, confira os campos")
        this.router.navigate(['login'])
      }
    )
  }

  logout() {
    this.afAuth.auth.signOut();
    window.localStorage.setItem("UserEmail", "");
    this.router.navigate(['login']);
  }



  public getPro(email: string) {
    return this.afs.collection<Profissional>('profissionais', ref => ref.where('email', "==", email))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({
            key: a.payload.doc.id,
            ...a.payload.doc.data()
          }))
        )
      )
  }

  public getCli(email: string) {
    return this.afs.collection<Cliente>('clientes', ref => ref.where('email', "==", email))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({
            key: a.payload.doc.id,
            ...a.payload.doc.data()
          }))
        )
      )
  }

}
