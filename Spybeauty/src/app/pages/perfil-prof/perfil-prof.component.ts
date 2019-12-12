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
    protected activedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRouter.snapshot.paramMap.get("id");
    console.log();
    
    if(this.id){
      this.profServ.getProfissional(this.id).subscribe(
        res => {
          console.log(this.id);
          this.profissional = res;
        }
      );
    }
  }

}
