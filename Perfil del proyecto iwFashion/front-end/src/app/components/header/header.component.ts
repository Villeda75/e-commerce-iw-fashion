import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLoggeado: User;
  public Islogged: boolean;
  public IsAdmin: boolean;
  NombreUsuario: string;
  Correo: string;
  foto: string;
  emailVerified: boolean = false;

  simboloToolTip: string = '';
  MensajeToolTip: string = '';
  constructor(private dialog: MatDialog, private autenticacion: AuthService, private router: Router) {
    if (this.autenticacion.isLoggedIn) {

      this.usuarioLoggeado = JSON.parse(localStorage.getItem('user'));
      if (this.usuarioLoggeado.email == "admifashion4@gmail.com") { this.IsAdmin = true; }
      else { this.IsAdmin = false; }
      this.emailVerified = this.usuarioLoggeado.emailVerified;
    }
  }

  ngOnInit(): void {

    this.VerificarLoggin();
    if (this.Islogged) {
      if (this.usuarioLoggeado.displayName) {

        this.NombreUsuario = this.usuarioLoggeado.displayName;
      }
      else {
        this.NombreUsuario = this.usuarioLoggeado.email;

      }
      this.foto = this.usuarioLoggeado.photoURL;
      this.Correo = this.usuarioLoggeado.email;

      if (this.emailVerified) {

      }
      else {
        this.simboloToolTip = '?';
        this.MensajeToolTip = 'El email no ha sido verificado';
      }
    }

  }

  OpenLogin() {

    const dialogConfig = new MatDialogConfig();
    /*dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;*/
    this.dialog.open(LoginFormComponent, dialogConfig);
    this.VerificarLoggin();
  }

  async CerrarSesion() {
    await this.autenticacion.logout();
    this.VerificarLoggin();
    this.ngOnInit();
  }

  VerificarLoggin() {
    this.Islogged = this.autenticacion.isLoggedIn;
  }

}
