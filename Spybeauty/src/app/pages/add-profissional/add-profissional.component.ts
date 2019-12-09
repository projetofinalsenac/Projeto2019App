import { Component, OnInit } from '@angular/core';
import { ProfissionalServiceService } from '../../serv/profissional-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-profissional',
  templateUrl: './add-profissional.component.html',
  styleUrls: ['./add-profissional.component.css']
})
export class AddProfissionalComponent implements OnInit {

  constructor(
    protected profService: ProfissionalServiceService,
    protected router: Router
  ) { }

  ngOnInit() {


  }
  onsubmit(form) {
    this.profService.save(form).then(
      res => {
        //this.resetFields();
        this.router.navigate(['/home'])
      }
    )
  }

}



