import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  URI="https://veterinarialissette-vc170991-aa170621.000webhostapp.com/api";

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


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

GetProductById(id:number)
{
  return this.http.get(`${this.URI}/products/${id}`);
}

 //CRUD Tabla Marcas

 GetBrands()
 {
  return this.http.get(`${this.URI}/brands`);
 }
 InsertBrand(newBrand:Brand)
 {
  
  console.log(JSON.stringify(newBrand));
  const headers = { 'Content-Type': 'aplication/json' };
  return this.http.post(`${this.URI}/brands`,JSON.stringify({ "brand": newBrand.brand}), { headers });
   
 }

UpdateBrand(_Brand:Brand)
 {
  return this.http.post(`${this.URI}/brands-update/${_Brand.id_brand}`,JSON.stringify(_Brand));
 }
 DeleteBrand(id:number)
 {
   return this.http.delete(`${this.URI}/brands/${id}`);
 }

}
