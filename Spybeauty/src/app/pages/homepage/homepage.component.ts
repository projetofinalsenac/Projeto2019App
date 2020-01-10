import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {  

    var nome = window.localStorage.getItem("nome");
    if(nome == ""){
      this.router.navigate(['/login']);
    }
  }

  

}
