import { Component, OnInit } from '@angular/core';
import { ClienteserviceService } from 'src/app/serv/clienteservice.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { AuthService } from 'src/app/serv/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastroclientes',
  templateUrl: './cadastroclientes.component.html',
  styleUrls: ['./cadastroclientes.component.css']
})
export class CadastroclientesComponent implements OnInit {

  public cliente: Cliente = new Cliente();

  constructor(
    public clienteService: ClienteserviceService, 
    public authservice: AuthService,
    public route: Router
    ) { }

  ngOnInit() {
    
  }

  onsubmit(form){
    let nome = this.cliente.nome
    this.clienteService.save(this.cliente).then(
      res => {
        this.authservice.signup(this.cliente.email, this.cliente.senha, nome);                       
        this.alertmessage("Sucesso", "Cadastrado com sucesso "+ this.cliente.nome); 
        
        
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
