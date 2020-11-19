import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../models/brand';
import { CustomDesign } from '../models/custom-design';
import { FormContact } from '../models/form-contact';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url_base = 'https://veterinarialissette-vc170991-aa170621.000webhostapp.com/'; //URL base del servidor

  urlProduct = "https://veterinarialissette-vc170991-aa170621.000webhostapp.com/Products/newProduct.php";

  urlPurchase=" https://veterinarialissette-vc170991-aa170621.000webhostapp.com/Compras/comprar.php";

  constructor(private http: HttpClient) { }

  GetAllProductos(genero?: string, categoria?: string) {
    if (genero.length > 0 && categoria.length == 0) {
      return this.http.get(this.url_base + 'api/products-' + genero);
    }
    else if (genero.length > 0 && categoria.length > 0) {
      return this.http.get(this.url_base + 'api/' + categoria + '/' + genero);
    }
    else {
      return this.http.get(this.url_base + 'api/products');
    }
  }

  GetProductById(id: number) {
    return this.http.get(`${this.url_base}api/products/${id}`);
  }


  //CRUD Tabla Marcas

  GetBrands() {
    return this.http.get(this.url_base + 'api/brands');
  }

  InsertBrand(newBrand: Brand) {
    return this.http.post(`${this.url_base}crud/newBrand.php`, JSON.stringify(newBrand));
  }

  //editar con php normal
  UpdateBrand(_Brand: Brand) {
    return this.http.post(`${this.url_base}crud/editBrand.php`, JSON.stringify(_Brand));
  }

  //CRUD Tabla CustomDesign

  GetCustomDesigns() {
    return this.http.get(this.url_base + 'api/customDesigns');
  }

  InsertCustomDesign(_customDesign: CustomDesign) {
    return this.http.post(`${this.url_base}CustomDesigns/newCD.php`, JSON.stringify(_customDesign));

  }

  UpdateCustomDesign(_customDesign: CustomDesign) {
    return this.http.post(`${this.url_base}CustomDesigns/editCD.php`, JSON.stringify(_customDesign));
  }

  DeleteCustomDesign(_customDesign: CustomDesign) {
    return this.http.post(`${this.url_base}CustomDesigns/deleteCD.php`, JSON.stringify(_customDesign));
  }


  //Formulario de contacto

  SendFormContact(_contactForm: FormContact) {
    return this.http.post(`${this.url_base}phpMailer/sendEmail.php`, JSON.stringify(_contactForm));
  }

  SendRequestDesign(_requestDesign: any) {
    return this.http.post(`${this.url_base}phpMailer/sendEmailDesignCustom.php`, JSON.stringify(_requestDesign));
  }
  SendRequestDesignCreated(_requestDesign: any) {
    return this.http.post(`${this.url_base}phpMailer/sendEmailDesignCustomExits.php`, JSON.stringify(_requestDesign));
  }

  RegisterUser(_UserRegister: any) {
    //console.log( JSON.stringify(_UserRegister)) ; //verificar Json que se envía
    return this.http.post(`${this.url_base}Users/register.php`, JSON.stringify(_UserRegister));
  }


  //
  GetSizes() {
    return this.http.get(this.url_base + 'api/sizes');
  }

  //
   GetGenders() {
    return this.http.get(this.url_base + 'api/genders');
  }

  //
   GetSubCategories() {
    return this.http.get(this.url_base + 'api/subCategories');
  }
  GetColors() {
    return this.http.get(this.url_base + 'api/colors');
  }


 InsertProduct(_product:any)
  {
   return this.http.post(`${this.urlProduct}`, JSON.stringify(_product));
  }

GetAllProductsWithNoCategorie()
{
  return this.http.get(this.url_base + 'api/products');
}

FinishShopping(listItems:any)
{
  return this.http.post(`${this.urlPurchase}`, JSON.stringify(listItems));
}

}
