import { Component, OnInit } from '@angular/core';
import { CustomDesignsComponent } from '../custom-designs/custom-designs.component';
import { MarcasComponent } from '../marcas/marcas.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  //variables que guarda la selección del componente a mostrar
  isSelected: string = 'dashboard';

  constructor() { }

  ngOnInit(): void {
  }

  //Cambia el valor del componente clickeado en el side nav
  redireccionar(componentName: string): void {
    this.isSelected = componentName;
  }

}
