import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from '../../serv/profissional-service.service';
import { Router } from '@angular/router';
import { Profissional } from '../../modelo/profissional';
import Swal from 'sweetalert2'

//const Swal = require('sweetalert2');

@Component({
  selector: 'app-add-profissional',
  templateUrl: './add-profissional.component.html',
  styleUrls: ['./add-profissional.component.css']
})
export class AddProfissionalComponent implements OnInit {
public profissional: Profissional = new Profissional;
  constructor(
    protected profService: ProfissionalServiceService,
    protected router: Router
  ) { }

  ngOnInit() {


  }
  onsubmit(form) {
    this.profService.save(this.profissional).then(
      res => {
        //this.resetFields();
       this.alertmessage("Sucesso", "Cadastrado com sucesso");
        this.router.navigate(['/home'])
      }
    )
  }

  

  alertmessage(title, text){
    Swal.fire({
      title: title,
      text: text,
      confirmButtonText: 'OK'
    })
  }

}



