import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/brand';
import { CustomDesign } from '../models/custom-design';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  URI='https://veterinarialissette-vc170991-aa170621.000webhostapp.com/api'; //Laravel

  url = 'https://veterinarialissette-vc170991-aa170621.000webhostapp.com/crud/'; //PHP 

  URL = "https://veterinarialissette-vc170991-aa170621.000webhostapp.com/CustomDesigns/"; //CustomDesigns



  constructor(private http:HttpClient) { }


  GetAllProductos(genero?:string,categoria?:string)
  {
    if(genero.length>0 &&categoria.length==0)
    {
      return this.http.get(this.URI+'/products-'+genero);
    }
  else if(genero.length>0 && categoria.length>0)
  {
    return this.http.get(this.URI+'/'+categoria+'/'+genero);
  }
  else
  {
    return this.http.get(this.URI+'/products');
  }
 }

 GetProductById(id:number)
 {

   //http://veterinarialissette-vc170991-aa170621.000webhostapp.com/api/products/5
   return this.http.get(`${this.URI}/products/${id}`);

 }


 //CRUD Tabla Marcas

 GetBrands() {
  return this.http.get(this.URI+'/brands');
 }

 InsertBrand(newBrand:Brand) {
  return this.http.post(`${this.url}newBrand.php`, JSON.stringify(newBrand));
}

//editar con php normal
UpdateBrand(_Brand:Brand) {
  return this.http.post(`${this.url}editBrand.php`, JSON.stringify(_Brand));
 }

 //CRUD Tabla CustomDesign


 GetCustomDesigns()
 {
  return this.http.get(this.URI+'/customDesigns');
 }

 InsertCustomDesign(_customDesign:CustomDesign)
 {
  return this.http.post(`${this.URL}newCD.php`, JSON.stringify(_customDesign) );
 
 }

 UpdateCustomDesign(_customDesign:CustomDesign)
 {
  return this.http.post(`${this.URL}editCD.php`, JSON.stringify(_customDesign) );
 }

 DeleteCustomDesign(_customDesign:CustomDesign)
 {
  return this.http.post(`${this.URL}deleteCD.php`, JSON.stringify(_customDesign) );
 }


}
