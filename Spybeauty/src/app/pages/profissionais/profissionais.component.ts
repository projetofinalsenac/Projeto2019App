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
<<<<<<< HEAD
    protected router: Router
=======
protected router: Router
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931
  ) { }

  ngOnInit() {
    this.prof = this.proService.getAll();
  }

  perfil(profissional){
<<<<<<< HEAD
    this.router.navigate(['perfil' + profissional.key]);
=======
    this.router.navigate(['perfilProf', profissional.key]);
>>>>>>> 928bc9c17b3b5de435316645e85c7602a72e0931
  }

}
