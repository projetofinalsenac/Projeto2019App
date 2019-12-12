import { Component, OnInit } from '@angular/core';
import { Teste } from '../../teste';
import { Observable } from 'rxjs';
import { AreasService } from 'src/app/procedimentos/areas.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  protected pessoa:any
    
  constructor(
    public areaService: AreasService
  ) { }

  ngOnInit() {
    this.pessoa = this.areaService.getAll();
  }

}
