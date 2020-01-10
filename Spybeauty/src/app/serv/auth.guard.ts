import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()


export class AuthGuard implements CanActivate{
displayname: string;

    constructor(private authservic: AuthService){}


    canActivate(): boolean{
        var nome = window.localStorage.getItem("nome");
        if(nome != ""){
            return true
        }else{
            return false;
        }
       
}
}
