import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  URI='https://veterinarialissette-vc170991-aa170621.000webhostapp.com/api';
  constructor(private http:HttpClient) { }


  GetAllProductos(genero?:string,categoria?:string)
  {
    if(genero.length>0 &&categoria.length==0)
    {
      return this.http.get(this.URI+'/products/'+genero);
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


 //CRUD Tabla Marcas

 GetBrands()
 {
  return this.http.get(`${this.URI}/brands`);
 }
 InsertBrand(newBrand:Brand)
 {
   console.log(newBrand);
  
   return this.http.post(`${this.URI}/brands`,newBrand);
 }
UpdateBrand(_Brand:Brand)
 {
  return this.http.put(`${this.URI}/brands/${_Brand.id_brand}`, _Brand);
 }
 DeleteBrand(id:number)
 {
   return this.http.delete(`${this.URI}/brands/${id}`);
 }

}
