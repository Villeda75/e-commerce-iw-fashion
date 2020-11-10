import { Component, OnInit } from '@angular/core';
import { IItem } from '../../models/iitem';
import { Observable } from 'rxjs'
import {CartPruebaService} from '../../services/cart-prueba.service';


@Component({
  selector: 'app-cart-prueba',
  templateUrl: './cart-prueba.component.html',
  styleUrls: ['./cart-prueba.component.css']
})
export class CartPruebaComponent implements OnInit {

  public items: Array<any>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  constructor(private _cartService:CartPruebaService) { }
  ngOnInit() {
    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.sales_price * current.quantity), 0);
      }
    })
  }
  public remove(producto:any)
  {
   this._cartService.removeElementCart(producto);
  }

  public decrease(producto:any)
  {
    this._cartService.DecreaseQuantity(producto);
  }


}
