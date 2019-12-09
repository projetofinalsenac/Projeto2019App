import { Injectable } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfissionalServiceService {

  constructor(
    protected afire: AngularFirestore
  ) { }


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
