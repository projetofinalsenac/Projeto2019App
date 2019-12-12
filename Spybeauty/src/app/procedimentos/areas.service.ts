import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth' ;
import {auth} from 'firebase/app' ;
@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }


  public getAll() {
    return this.db.collection("cadastro").snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(c => ({ key: c.payload.doc.id, 
          ...c.payload.doc.data() }))
        )
      )
  }

 

}