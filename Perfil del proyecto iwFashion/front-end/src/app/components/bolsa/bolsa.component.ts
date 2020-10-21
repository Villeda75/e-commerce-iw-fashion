import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginFormComponent} from '../login-form/login-form.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {
   public Islogged:boolean;

  constructor(private _location: Location,private dialog: MatDialog,private autenticacion:AuthService) { }

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

    VerificarLoggin()
{
  this.Islogged=this.autenticacion.isLoggedIn;
}

FinalizarCompra()
{

  this.VerificarLoggin();

  if(this.Islogged==true)
  {
   alert('Compra finalizada con exito');
  }
  else
  {
    this.OpenLogin();
  }


}

}



