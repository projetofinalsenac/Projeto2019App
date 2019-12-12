import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Teste } from '../../teste';
import { Observable } from 'rxjs';
import { AreasService } from 'src/app/procedimentos/areas.service';
=======
>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
<<<<<<< HEAD
  protected pessoa:any
    
  constructor(
    public areaService: AreasService
  ) { }

  ngOnInit() {
    this.pessoa = this.areaService.getAll();
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 49eb85e9cc2bf9e499c876923e7ee87c6e1003c7
  }

}
