import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-list-products-admin',
  templateUrl: './list-products-admin.component.html',
  styleUrls: ['./list-products-admin.component.css']
})
export class ListProductsAdminComponent implements OnInit {
 
  productos:any[]=[];
   productosInitial:any[]=[];
  subcategories: any[] = [];
  genders: any[] = [];
  brands: any[] = [];
  //
  page:number=1;
  subCategorie:string='';
  gender:string='';
  brand:string='';

  total:number;
  constructor(
    private database:DatabaseService,
    private RouterActual:ActivatedRoute,
    private router:Router) { 
     
    }

  ngOnInit(): void {
    this.ShowAllProducts();
    this.database.GetBrands().subscribe((res:any)=>
    {
      this.brands=res.results;
    });
    this.database.GetGenders().subscribe((res:any)=>
    {
      this.genders=res.results;
    });
    this.database.GetSubCategories().subscribe((res:any)=>
    {
      this.subcategories=res.results;
    });
  }

  ShowAllProducts()
  {
    this.database.GetAllProductsWithNoCategorie().subscribe((res:any)=>
      {
        this.productos=res.results;
        this.productos.sort(function(a, b){return a.id_product - b.id_product})
        console.log(this.productos);
        this.productosInitial=this.productos;
        this.total=this.productos.length;
      }
      );
  }

 BuscarProducts()
  {
   
let _brand='';
if(this.brand)
{
_brand=this.brand;
}
let _gender='';
if(this.gender)
{
  _gender=this.gender;
}

let _subcategorie='';
if(this.subCategorie)
{
_subcategorie=this.subCategorie;
}

    //marca y subcategoria
   
  if(_brand.length>0 && _gender.length>0)
  {
   
       this.productos=this.productosInitial.filter(item =>  item.brand==_brand && item.gender==_gender);
      this.total=this.productos.length;
  }
  else if(_brand.length>0 && _gender.length==0)
  {

    this.productos=this.productosInitial.filter(item =>  item.brand==_brand );
    this.total=this.productos.length;
  }
  else if(_brand.length==0 && _gender.length>0)
  {
  
    this.productos=this.productosInitial.filter(item =>item.gender==_gender);
      this.total=this.productos.length;
  }
  else
  {
  
  }

  }

  EliminarProducto(id:number)
  {
  alert('Se eliminó: '+id);
  }
  ModificarProducto(id:number)
  {
  alert('Se modificó: '+id);
  this.router.navigate(['/addProduct/' + id]);
  }
 

}