import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Profissional } from '../modelo/profissional';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'



@Injectable({
  providedIn: 'root'
})
export class ProfissionalServiceService {
  protected prof: Profissional = new Profissional();



  constructor(
    protected afire: AngularFirestore,
    protected afDatabase: AngularFireDatabase


  ) { }

  save(profissional: Profissional) {
    return this.afire.collection('profissionais').add({

      nome: profissional.nome,
      email: profissional.email,
      atividade: profissional.atividade,
      senha: profissional.senha
    })
  }


  public getAll() {
    return this.afire.collection<Profissional>('profissionais').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({ key: a.payload.doc.id,
            ...a.payload.doc.data()}))
        )
      );



  }

  public getProfissional(key) {

    return this.afire.doc<Profissional>('profissionais/'+ key).get();    

  }






}
