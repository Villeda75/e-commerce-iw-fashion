import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {AuthService} from './auth.service';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate {

  usuarioLoggeado:User;
  constructor( private router: Router,autenticacion:AuthService) { }

  canActivate() {

    this.usuarioLoggeado = JSON.parse(localStorage.getItem('user'));
    if (this.usuarioLoggeado.email == "admifashion4@gmail.com") { return true }
    else { return false }

  }
}
