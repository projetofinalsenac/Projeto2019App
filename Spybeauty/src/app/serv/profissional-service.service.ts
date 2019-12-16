import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Profissional } from '../modelo/profissional';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931


@Injectable({
  providedIn: 'root'
})
export class ProfissionalServiceService {
  protected prof: Profissional = new Profissional();
<<<<<<< HEAD

  constructor(
    protected afire: AngularFirestore,
    protected afDatabase: AngularFireDatabase
=======
  constructor(
    private afire: AngularFirestore,
    protected afDatabase: AngularFireDatabase,
    protected profItem: Observable<Profissional>,
    private ItemDoc: AngularFirestoreDocument<Profissional>
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931
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
<<<<<<< HEAD
    return this.afire.collection<Profissional>('profissionais').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({ key: a.payload.doc.id,
            ...a.payload.doc.data()}))
        )
      );
=======
    return this.afire.collection('profissionais').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({
            key: a.payload.doc.id,
            ...a.payload.doc.data()
          }))
        )
      )
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931

  }

  public getProfissional(key) {
<<<<<<< HEAD
    return this.afire.doc<Profissional>('profissionais/'+ key).get();
=======
    this.ItemDoc = this.afire.doc<Profissional>('profissionais/'+ key);
    this.profItem = this.ItemDoc.valueChanges();
    return this.profItem;
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931
  }




<<<<<<< HEAD
=======


>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931
}
