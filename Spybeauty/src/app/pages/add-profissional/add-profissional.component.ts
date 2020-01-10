import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from '../../serv/profissional-service.service';
import { Router } from '@angular/router';
import { Profissional } from '../../modelo/profissional';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/serv/auth.service';

//const Swal = require('sweetalert2');

@Component({
  selector: 'app-add-profissional',
  templateUrl: './add-profissional.component.html',
  styleUrls: ['./add-profissional.component.css']
})
export class AddProfissionalComponent implements OnInit {
  protected profissional: Profissional = new Profissional;
  atividade: string[]=[];
  dia: string[]=[];
  horario: string[]=[];
  nome: string =' ';
    constructor(
    protected profService: ProfissionalServiceService,
    public authservice: AuthService,
    protected router: Router
  ) { }

  ngOnInit() {

  }
  onsubmit(form) {
    this.profissional.atividade = this.atividade;
    this.profissional.dias = this.dia;
    this.profissional.horarios = this.horario;
    this.nome = this.profissional.nome;  
    this.profService.save(this.profissional).then(
      res => {       
        //this.resetFields();
        this.authservice.signup(this.profissional.email, this.profissional.senha, this.nome);                       
        this.alertmessage("Sucesso", "Cadastrado com sucesso"+ this.profissional.nome);        
        console.log(this.authservice.user);
        
      }
    )
    
  }

  addAtividade(at:string){    
    this.atividade.push(at);  
    this.profissional.atividade = []; 
    console.log(this.atividade);
  }
  addDia(at:string){    
    this.dia.push(at);  
    this.profissional.dias = []; 
    console.log(this.dia);
  }
  addHorario(at:string){    
    this.horario.push(at);  
    this.profissional.horarios = []; 
    console.log(this.horario);
  }

  




  alertmessage(title, text) {
    Swal.fire({
      title: title,
      text: text,
      confirmButtonText: 'OK'
    })
  }

}



