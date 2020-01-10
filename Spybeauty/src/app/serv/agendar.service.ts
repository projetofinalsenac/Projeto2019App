import { Injectable } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore';
import { Profissional } from '../modelo/profissional';
import { Agendamento } from '../modelo/agendamento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {
  //protected profissional: Profissional = new Profissional;
  protected agendamento: Agendamento = new Agendamento
protected profissional: Profissional = new Profissional

  constructor(
    protected afire: AngularFirestore,
    protected afDatabase: AngularFireDatabase
  ) { }

  agendar(agendamento: Agendamento, nome: string){
    return this.afire.collection('agendamento'+nome).add({
      profissional: agendamento.profissional,
      atividade: agendamento.atividade,
      nomecliente: agendamento.nomecliente,
      horario: agendamento.horario,
      dia: agendamento.dia,
      telefone: agendamento.telefone
    })
  }

  getAgendas(p:string){
    this.afire.collection<Agendamento>('agendamento'+p).snapshotChanges()
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
