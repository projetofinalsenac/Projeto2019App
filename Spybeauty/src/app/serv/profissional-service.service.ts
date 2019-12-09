import { Injectable } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Profissional } from '../modelo/profissional';
import { FormsModule} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database'


@Injectable({
  providedIn: 'root'
})
export class ProfissionalServiceService {

  constructor(
   protected afire: AngularFirestore,
   
  ) { }

  save(profissional: Profissional){
    return this.afire.collection('profissionais').add({
     
      nome: profissional.nome,
      email: profissional.email,
      atividade: profissional.atividade,      
      senha: profissional.senha
    })
  }


  public getAll() {
    return this.afire.collection('profissionais').snapshotChanges()
    .pipe(
      map(changes => 
        changes.map( a => ({key: a.payload.doc.id,
        ...a.payload.doc.data()}))
        )
    )
    
  }
}
