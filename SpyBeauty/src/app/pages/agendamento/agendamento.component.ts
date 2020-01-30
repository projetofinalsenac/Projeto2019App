import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from 'src/app/serv/profissional-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Profissional } from 'src/app/modelo/profissional';
import * as $ from 'jquery'
import { AgendarService } from 'src/app/serv/agendar.service';
import { Agendamento } from 'src/app/modelo/agendamento';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/serv/auth.service';
@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
public id: string = null;
public profissional: Profissional = new Profissional;
public agendamento: Agendamento = new Agendamento;
protected ag: any;


  constructor(
    public service: ProfissionalServiceService,
    public agendamentoService: AgendarService,
    protected router: Router,
    protected activatedRouter: ActivatedRoute

  ) { }



  ngOnInit() {
    
    
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    console.log(this.id);
    
    if(this.id){
      return this.service.getProfissional(this.id).subscribe(
        res => {
          
          this.profissional.nome = res.get('nome');
          this.profissional.email = res.get('email');
          this.profissional.atividade = res.get('atividade');
          this.profissional.senha = res.get('senha');
          this.profissional.sobrenome = res.get('sobrenome')
          this.profissional.horarios = res.get('horarios');
          this.profissional.dias = res.get('dias');
          this.agendamento.atividade = "Atividade";
          this.agendamento.dia = "Dia";
          this.agendamento.horario = "Horario";          
          console.log(res);

        }
      )
    
    }
    
   
  }

  submitAgendamento(form){
    this.agendamento.profissional = this.profissional.nome;
    this.agendamentoService.agendar(this.agendamento).then(
      res => {
        this.alertmessage( 'Sucesso', 'Agendamento Realizado');
        this.router.navigate(['/home'])
        
      }
    )
  }
  alertmessage(title, text) {
    Swal.fire({
      title: title,
      text: text,
      confirmButtonText: 'OK'
    })
  }
  
  }

