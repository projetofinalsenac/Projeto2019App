import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from 'src/app/serv/profissional-service.service';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  protected prof: any
  
  constructor(
    protected proService: ProfissionalServiceService
  ) { }

  ngOnInit() {
    this.prof = this.proService.getAll();
    console.log(this.prof);    
    
  }



}
