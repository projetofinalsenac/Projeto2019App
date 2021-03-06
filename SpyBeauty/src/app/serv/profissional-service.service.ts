import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Profissional } from '../modelo/profissional';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'

import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente';
import { Agendamento } from '../modelo/agendamento';



@Injectable({
  providedIn: 'root'
})
export class ProfissionalServiceService {
 
 

  constructor(
    protected afire: AngularFirestore,
    protected afDatabase: AngularFireDatabase

  ) { }

  save(profissional: Profissional) {
    return this.afire.collection('profissionais').add({
      nome: profissional.nome,
      sobrenome: profissional.sobrenome,
      email: profissional.email,
      atividade: profissional.atividade,
      senha: profissional.senha,
      horarios: profissional.horarios,
      dias: profissional.dias,
      status: "Profissional"
    })
  }
 

//Função para retornar profissionais do firebase
  public getAll() {

    return this.afire.collection<Profissional>('profissionais').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({
            key: a.payload.doc.id,
            ...a.payload.doc.data()
          }))
        )
      );


  }
//Função para retornar clientes do firebase
  public getAllClientes() {

    return this.afire.collection<Cliente>('clientes').snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(a => ({
            key: a.payload.doc.id,
            ...a.payload.doc.data()
          }))
        )
      );


  }

  public getProfissional(key) {

    return this.afire.doc<Profissional>('profissionais/' + key).get();

  }
  public getCliente(key) {

    return this.afire.doc<Profissional>('clientes/' + key).get();

  }

  public getencontros(){
    return this.afire.collection<any>('agendamento').snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(a => ({
          key: a.payload.doc.id,
          ...a.payload.doc.data()
        }))
      )
    );

  }

  


}

