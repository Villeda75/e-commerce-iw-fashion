import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
  productos:any[];
  urlPartes:string[]=[];
  selected:boolean;
  selected1:boolean;
  page: number = 1;
  total:number;

  constructor(private database:DatabaseService,private RouterActual:ActivatedRoute) {
    
    this.RouterActual.snapshot.url.map(res=>{
      this.urlPartes.push(res.path);
    });
this.RedireccionarURL();


   }

   ngOnInit(): void {
   
    if(this.productos.length==0)
    {
    alert('Ops por el momento no se encuentran resultados');
    }
    
  }

  RedireccionarURL()
  {
    var genero='';
    var categoria='';
    console.log('url partes');
    console.log(this.urlPartes);
    if(this.urlPartes.length>0)
    {
      if(this.urlPartes[0]=="hombres"){genero="men"};
      if(this.urlPartes[0]=="mujeres"){genero="women"};
      if(this.urlPartes[0]=="niños"){genero="kids"};
      if(this.urlPartes.length>1)
      {
        if(this.urlPartes[1]=="ropa"){categoria="clothes"};
        if(this.urlPartes[1]=="zapatos"){categoria="shoes"};
        if(this.urlPartes[1]=="accesorios"){categoria="accesories"};
      }
    
    }
    //se cargan los datos dependiendo del url 
    this.TraerDatos(genero,categoria);
    
  }

  async TraerDatos(_genero?:string,_categoria?:string)
  {
   await this.database.GetAllProductos(_genero,_categoria).subscribe((res:any)=>
    {
      console.log(res);
      this.productos=res.results;
      this.total=this.productos.length;
    });
  }

}
