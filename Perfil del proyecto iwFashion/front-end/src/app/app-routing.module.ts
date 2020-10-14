import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    //RUTA DONDE VA ANGULAR
    path: 'home',
    //ESTA LINEA MUESTRA EN PANTALLA EL COMPONENTE EL MUY OBJETO HTML
    component:HomeComponent
  },
  {
    //RUTA DONDE VA ANGULAR
    path: 'hombres/ropa',
    //ESTA LINEA MUESTRA EN PANTALLA EL COMPONENTE EL MUY OBJETO HTML
    component:ListaProductosComponent
  },
  {
    //RUTA DONDE VA ANGULAR
    path: 'detalle',
    //ESTA LINEA MUESTRA EN PANTALLA EL COMPONENTE EL MUY OBJETO HTML
    component:DetalleProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
