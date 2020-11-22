import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertasService } from '../../alertas.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
  productos:any[]=[];
  Initialproductos:any[]=[];
  urlPartes:string[]=[];
  selected:boolean;
  selected1:boolean;
  page: number = 1;
  total:number;
  brand:string='';
  size:string='';

  brands: any[] = [];
  sizes:any[]=[];
  public Islogged: boolean;

  constructor(
    private database:DatabaseService,
    private RouterActual:ActivatedRoute,
    private router:Router,
    private autenticacion: AuthService,
    private alerta: AlertasService) 
    {
    
    this.RouterActual.snapshot.url.map(res=>{
      this.urlPartes.push(res.path);
    });
    
    this.RedireccionarURL();

   }

   ngOnInit(): void {
    
    this.VerificarLoggin();
    this.database.GetBrands().subscribe((res:any)=>
    {
      this.brands=res.results;
    });
    this.database.GetSizes().subscribe((res:any)=>
      {
        this.sizes=res.results;
      });
    
    
  }

  VerificarLoggin() {
    this.Islogged = this.autenticacion.isLoggedIn;
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
      /* res.results.forEach(item => {
        if(item.visible == 1){
          this.productos.push(item);
        }
      }); */

      this.productos = res.results.filter(item =>  item.visible == 1);
      //this.productos=res.results;
      this.Initialproductos=this.productos;
      this.total=this.productos.length;
    });
  }

  NavigateProducto(id:number)
  {
    this.router.navigate(['/productos/' + id]);
  }


  
 BuscarProducts()
 {

let _brand='';
if(this.brand)
{
_brand=this.brand;
}

 
let _size='';
if(this.size)
{
 _size=this.size;
}


   //marca y tamaño
  
 if(_brand.length>0 && _size.length>0)
 {
  
      this.productos=this.Initialproductos.filter(item =>  item.brand==_brand && item.size==_size);
     this.total=this.productos.length;
 }
 //solo marca
 else if(_brand.length>0 && _size.length==0)
 {

   this.productos=this.Initialproductos.filter(item =>  item.brand==_brand );
   this.total=this.productos.length;
 }
 //solo tamaño
 else if(_brand.length==0 && _size.length>0)
 {
 
   this.productos=this.Initialproductos.filter(item =>item.size==_size);
     this.total=this.productos.length;
 }
 else
 {
 
 }

 }

 MostrarTodo()
 {
   this.productos=this.Initialproductos;
    this.total=this.productos.length;
 }

}
