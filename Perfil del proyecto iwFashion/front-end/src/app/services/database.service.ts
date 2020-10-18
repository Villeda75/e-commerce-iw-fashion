import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  URI='https://veterinarialissette-vc170991-aa170621.000webhostapp.com/api'; //Laravel

  url = 'https://veterinarialissette-vc170991-aa170621.000webhostapp.com/crud/'; //PHP 

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

 GetBrands() {
  return this.http.get(`https://veterinarialissette-vc170991-aa170621.000webhostapp.com/api/brands`);
 }

 InsertBrand(newBrand:any) {
  return this.http.post(`${this.url}newBrand.php`, JSON.stringify( {brand: newBrand} ) );
}

//editar con php normal
UpdateBrand(_Brand:Brand) {
  return this.http.post(`${this.url}editBrand.php`, JSON.stringify(_Brand));
 }

 //borrar con api laravel
 DeleteBrand(id:number) {
  return this.http.post(`${this.URI}/brands/${id}`, id);
 }

 //borrar con php normal
 DeleteBrand2(id:number) {
  return this.http.get(`${this.url}deleteBrand.php?codigo=${id}`);
 }

}
