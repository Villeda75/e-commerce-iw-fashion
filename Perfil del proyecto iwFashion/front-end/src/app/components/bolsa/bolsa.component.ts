import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../../services/auth.service';
import { AlertasService } from '../../alertas.service';

import {CartPruebaService} from '../../services/cart-prueba.service';

@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {
  public Islogged: boolean;

   public items: Array<any>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;

  constructor(private _location: Location, private dialog: MatDialog, private autenticacion: AuthService,private alerta: AlertasService,private _cartService:CartPruebaService) { }

  ngOnInit(): void {
    
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.discount_price * current.quantity), 0);
      }
    })
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

  //eliminar completamente un item
  public remove(producto:any)
  {
   this._cartService.removeElementCart(producto);
  }

  //restar a cantidad
  public decrease(producto:any)
  {
    this._cartService.DecreaseQuantity(producto);
  }

  public increase(producto:any)
  {
    this._cartService.IncreaseQuantity(producto);
  }
  public ClearCart()
  {
    this._cartService.ClearCart();
  }

}



