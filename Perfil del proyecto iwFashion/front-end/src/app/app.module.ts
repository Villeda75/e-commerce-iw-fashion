import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MaterialModule} from '../material.module';

import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {IvyCarouselModule} from 'angular-responsive-carousel';
//Se importa la configuracion de nuestro firebase
import {environment} from '../environments/environment';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

//Modulo para interactuar con el server
import { HttpClientModule } from '@angular/common/http';

//Modulo para paginacion
import {NgxPaginationModule} from 'ngx-pagination';
import { CrudComponent } from './components/crud/crud.component'; // <-- import the module

//Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//image 2 ulpoad

import {ImageUploadModule} from 'angular2-image-upload';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DesignCustomViewComponent } from './components/design-custom-view/design-custom-view.component';
import { ToggleInformationComponent } from './components/toggle-information/toggle-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginFormComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    CrudComponent,
    ContactFormComponent,
    DesignCustomViewComponent,
    ToggleInformationComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    IvyCarouselModule,
    CarouselModule,
    HttpClientModule,
    NgxPaginationModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent]
})
export class AppModule { }
