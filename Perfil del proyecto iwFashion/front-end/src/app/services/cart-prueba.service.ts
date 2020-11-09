import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartPruebaService {
  private cart = new BehaviorSubject<Array<any>>(JSON.parse(localStorage.getItem("carrito"))); //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre
  public currentDataCart$ = this.cart.asObservable(); //

  constructor() { }
  public changeCart(newData: any) {
    //Obtenemos el valor actual

    let listCart = this.cart.getValue();
    //Si no es el primer item del carrito
    if(listCart)
    {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.id_product == newData.id_product));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {
        listCart[objIndex].quantity += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        listCart.push(newData);
      }  
     
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = []
     
      listCart.push(newData);
    
    }
    this.cart.next(listCart);//Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.SaveLocalStorage(listCart); 
  }
  public removeElementCart(newData:any){
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id_product == newData.id_product));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].quantity = 1;

      //Eliminamos el item del array del carrito
      listCart.splice(objIndex,1);
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.SaveLocalStorage(listCart);
   }

   public DecreaseQuantity(producto:any)
   {
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id_product == producto.id_product));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
     let cantidad= listCart[objIndex].quantity ;
     if(cantidad==1)
     {
       this.removeElementCart(producto);
     }
     else
     {
      listCart[objIndex].quantity=cantidad-1;
     }

     
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.SaveLocalStorage(listCart);
   }

   public IncreaseQuantity(producto:any)
   {
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.id_product == producto.id_product));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
     let cantidad= listCart[objIndex].quantity ;
     
      listCart[objIndex].quantity=cantidad+1;

     
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.SaveLocalStorage(listCart);
   }

   public SaveLocalStorage(carrito:any)
   {
    localStorage.setItem('carrito', JSON.stringify(carrito));
   }

   public ClearCart()
   {
    let listCart=[];
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.SaveLocalStorage(listCart);
   }

   }


