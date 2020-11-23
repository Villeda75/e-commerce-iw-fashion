import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DesignCustomViewComponent } from './components/design-custom-view/design-custom-view.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductsAdminComponent } from './components/list-products-admin/list-products-admin.component';

//guard
import {GuardServiceService} from './services/guard-service.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'mujeres', component: ListaProductosComponent },
  { path: 'mujeres/ropa', component: ListaProductosComponent },
  { path: 'mujeres/zapatos', component: ListaProductosComponent },
  { path: 'mujeres/accesorios', component: ListaProductosComponent },
  { path: 'hombres', component: ListaProductosComponent },
  { path: 'hombres/ropa', component: ListaProductosComponent },
  { path: 'hombres/zapatos', component: ListaProductosComponent },
  { path: 'hombres/accesorios', component: ListaProductosComponent },
  { path: 'niños', component: ListaProductosComponent },
  { path: 'niños/ropa', component: ListaProductosComponent },
  { path: 'niños/zapatos', component: ListaProductosComponent },
  { path: 'niños/accesorios', component: ListaProductosComponent },
  { path: 'detalle', component: DetalleProductoComponent },
  { path: 'administrar', component: AdministradorComponent ,canActivate: [GuardServiceService]},
  { path: 'contactar', component: ContactFormComponent }, 
  { path: 'diseños', component: DesignCustomViewComponent },
  { path: 'bolsa', component: BolsaComponent },
  { path: 'addProduct/:id', component: FormProductComponent,canActivate: [GuardServiceService] },
  { path: 'addProduct', component: FormProductComponent,canActivate: [GuardServiceService] },
   { path: 'ListProduct', component: ListProductsAdminComponent,canActivate: [GuardServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
