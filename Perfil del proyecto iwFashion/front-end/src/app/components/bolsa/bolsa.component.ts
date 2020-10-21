import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../../services/auth.service';
import { AlertasService } from '../../alertas.service';

@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {
  public Islogged: boolean;

  constructor(private _location: Location, private dialog: MatDialog, private autenticacion: AuthService,private alerta: AlertasService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  OpenLogin() {

    const dialogConfig = new MatDialogConfig();
    /*dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;*/
    this.dialog.open(LoginFormComponent, dialogConfig);
    this.VerificarLoggin();
  }

  VerificarLoggin() {
    this.Islogged = this.autenticacion.isLoggedIn;
  }

  FinalizarCompra() {

    this.VerificarLoggin();

    if (this.Islogged == true) {
      this.alerta.showSuccessAlert('¡Pronto agregaremos esta funcionalidad!');
    }
    else {
      this.OpenLogin();
    }


  }

}



