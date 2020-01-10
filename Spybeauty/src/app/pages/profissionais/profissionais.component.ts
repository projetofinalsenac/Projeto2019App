import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from 'src/app/serv/profissional-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  protected prof: any
  //const Swal = require('sweetalert2');
  constructor(
    protected proService: ProfissionalServiceService,

    protected router: Router

  ) { }

  ngOnInit() {
    this.prof = this.proService.getAll();
  }

  perfil(profissional){

    this.router.navigate(['perfil' + profissional.key]);

  }

}
