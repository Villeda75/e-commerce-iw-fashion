import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CrudComponent } from './components/crud/crud.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DesignCustomViewComponent } from './components/design-custom-view/design-custom-view.component';


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

  //Producto detalle por ID
  {path:'productos/:id',component:DetalleProductoComponent},

  //RUTAS Para mostrar productos de mujeres
  {
    path: 'mujeres',
    component:ListaProductosComponent
  },
  {
    path: 'mujeres/ropa',
    component:ListaProductosComponent
  },
  {
    path: 'mujeres/zapatos',
    component:ListaProductosComponent
  },
  {
    path: 'mujeres/accesorios',
    component:ListaProductosComponent
  },

 //RUTAS Para mostrar productos de hombre
 {
  path: 'hombres',
  component:ListaProductosComponent
},
{
  path: 'hombres/ropa',
  component:ListaProductosComponent
},
{
  path: 'hombres/zapatos',
  component:ListaProductosComponent
},
{
  path: 'hombres/accesorios',
  component:ListaProductosComponent
},
//RUTAS Para mostrar productos de niños
{
  path: 'niños',
  component:ListaProductosComponent
},
{
  path: 'niños/ropa',
  component:ListaProductosComponent
},
{
  path: 'niños/zapatos',
  component:ListaProductosComponent
},
{
  path: 'niños/accesorios',
  component:ListaProductosComponent
},


  {
    //RUTA Para ir a detalle producto
    path: 'detalle',
    component:DetalleProductoComponent
  },
  {   path: 'administrar',
    
    component:CrudComponent
  }
  , {   path: 'contactar',
  
  component:ContactFormComponent
}
, {   path: 'diseños',
  
  component:DesignCustomViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
