import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    protected authservice: AuthService,
  ) { }

  ngOnInit() {
  
  }

}
