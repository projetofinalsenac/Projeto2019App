import { Component, OnInit } from '@angular/core';
import { ClienteserviceService } from 'src/app/serv/clienteservice.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-cadastroclientes',
  templateUrl: './cadastroclientes.component.html',
  styleUrls: ['./cadastroclientes.component.css']
})
export class CadastroclientesComponent implements OnInit {

  protected cliente: Cliente = new Cliente;
  constructor(
    protected clienteService: ClienteserviceService, 
    route: Router,
    afAuth: AuthService
    ) { }

  ngOnInit() {
  }

  onsubmit(form){
    this.clienteService.save(this.cliente).then(
      res => {
        console.log("Cliente salvo");
      }
    )
  }

}
