import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from '../../serv/profissional-service.service';
import { Profissional } from '../../modelo/profissional';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css']
})


export class PerfilProfComponent implements OnInit {
  protected id: string= null;
  protected profissional: Profissional = new Profissional;
  
  constructor(
    protected profServ: ProfissionalServiceService,
    protected router: Router,
    protected activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    if(this.id){
      this.profServ.getProfissional(this.id).subscribe(
        res => {
          this.profissional.nome = res.get('nome');
          this.profissional.email = res.get('email');
          this.profissional.atividade = res.get('atividade');
          this.profissional.senha = res.get('senha');
          console.log(res);

        }
      )
    
    }

  }

  

}
