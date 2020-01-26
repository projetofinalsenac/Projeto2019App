import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class  AuthGuard implements CanActivate{
    public logged: boolean;
    constructor(private authservice: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
          this.logged = !!window.localStorage.getItem("UserEmail");
        if(this.logged){
            console.log("AUTHGUARD IF", this.logged);            
            return true;
        }else{
            this.router.navigate(['login']);
            console.log("AUTHGUARD  ELSE", this.logged);
            alert("Você não tem permissão para acessar, faça login")
            return false;
        }
    }


}