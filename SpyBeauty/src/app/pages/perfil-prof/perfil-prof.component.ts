import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from '../../serv/profissional-service.service';
import { Profissional } from '../../modelo/profissional';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-perfil-prof',
  templateUrl: './perfil-prof.component.html',
  styleUrls: ['./perfil-prof.component.css']
})


export class PerfilProfComponent implements OnInit {
  public id: string= null;
  public profissional: Profissional = new Profissional;
  
  constructor(
    protected profServ: ProfissionalServiceService,
    protected router: Router,
    protected activatedRouter: ActivatedRoute,
    
  ) { }

  ngOnInit() {

    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    if(this.id){
      return this.profServ.getProfissional(this.id).subscribe(
        res => {
          this.profissional.nome = res.get('nome');
          this.profissional.email = res.get('email');
          this.profissional.atividade = res.get('atividade');
          this.profissional.senha = res.get('senha');
          this.profissional.sobrenome = res.get('sobrenome');
          console.log(res);

        }
      )
    
    }

  }

  

}
