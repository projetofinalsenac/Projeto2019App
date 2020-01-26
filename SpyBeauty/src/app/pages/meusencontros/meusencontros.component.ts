import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';
import { ProfissionalServiceService } from 'src/app/serv/profissional-service.service';
import { Agendamento } from 'src/app/modelo/agendamento';
import { ActivatedRoute } from '@angular/router';
import { ClienteserviceService } from 'src/app/serv/clienteservice.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { query } from '@angular/animations';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AgendarService } from 'src/app/serv/agendar.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-meusencontros',
  templateUrl: './meusencontros.component.html',
  styleUrls: ['./meusencontros.component.css']
})
export class MeusencontrosComponent implements OnInit {

  public email: string;
  public agenda: any;
  public statusC: any
  public statusP: any;
  public nome: string = "";


  constructor(
    private profService: ProfissionalServiceService,
    protected activatedRouter: ActivatedRoute,
    protected clienteservice: ClienteserviceService,
    private db: AngularFirestore,
    private authservice: AuthService,
    private agendaSer: AgendarService

  ) {
    this.email = window.localStorage.getItem("UserEmail");
    console.log(this.email);
    this.statusP = this.authservice.getPro(this.email);
    this.statusC = this.authservice.getCli(this.email);
  }
  ngOnInit() {
    this.statusP.subscribe(
      res => {
        console.log(res[0]);
        if (res[0] != undefined) {
          let nome = res[0].nome
          console.log("Dentro do if 1");
          this.agenda = this.db.collection<Agendamento>('agendamento', ref => ref.where('profissional', '==', nome))
            .snapshotChanges()
            .pipe(
              map(changes =>
                changes.map(a => ({
                  key: a.payload.doc.id,
                  ...a.payload.doc.data()
                }))
              )
            );

        } else {
          res = null;
        }
      }
    )

    this.statusC.subscribe(
      res => {        
        if (res[0] != undefined) {
          this.nome = res[0].nome.trim();          
          console.log("Dentro do if 2");
          this.agenda = new Agendamento;
          this.agenda = this.db.collection<Agendamento>('agendamento', ref => ref.where('nomecliente','==',this.nome))
            .snapshotChanges()
            .pipe(
              map(changes =>
                changes.map(a => ({
                  key: a.payload.doc.id,
                  ...a.payload.doc.data()
                }))
              )
            );         
            
            
        } else {
          
        }
      }
    )




  }





}
