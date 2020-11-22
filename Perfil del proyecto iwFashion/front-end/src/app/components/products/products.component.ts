import { Component, OnInit } from '@angular/core';
import { ListProductsAdminComponent } from '../list-products-admin/list-products-admin.component';
import { FormProductComponent } from '../form-product/form-product.component';
//
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //variables que guarda la selección del componente a mostrar
  isSelected: string = 'gestionar-products';

  //Cambia el valor del componente clickeado en el side nav
  redireccionar(componentName: string): void {
    this.isSelected = componentName;
  }

}
