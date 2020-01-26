import { Component, OnInit } from '@angular/core';
import { AuthService } from './serv/auth.service';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpyBeauty';
  


  constructor(public authService: AuthService)
  {
    
  } 

  ngOnInit(){
    document.addEventListener("deviceready", function() {
      alert(device.platform);
      }, false);
  }
  
  
  signup() {this.authService.logout();}

  

}
