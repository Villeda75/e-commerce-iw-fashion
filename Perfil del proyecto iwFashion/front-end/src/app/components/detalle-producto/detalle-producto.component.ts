import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import {DatabaseService} from '../../services/database.service';
import { AlertasService } from '../../alertas.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  public Islogged: boolean;
  productoActual:any;
  SlideOptions = { items: 1, dots: true, nav: true, loop: true, 
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 1000,
    navText: ['Anterior', 'Siguiente'],
    responsive:    {   
    0: {
      items: 1.25,
    },
    576: {
      items: 2.25,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1280: {
      items: 4,
    },
  },

     };  
  constructor(    
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private database:DatabaseService,
    private autenticacion: AuthService,
    private alerta: AlertasService
    )
    { 
      const params = this.activatedRoute.snapshot.params;
      if (params.id) {

      this.database.GetProductById(params.id).subscribe((res:any)=>
          {
            this.productoActual=res.results[0];
            console.log(this.productoActual);
          });
      }
      else {
        //alert('no encontrado');
        this.alerta.showErrorAlert('Producto no encontrado');
      }
    }

  ngOnInit(): void {
    this.VerificarLoggin();
  }

  agregarBolsa(){
    this.alerta.showSuccessAlert('¡Pronto agregaremos esta funcionalidad!');
    this.router.navigate(['/bolsa']);
  }

  VerificarLoggin() {
    this.Islogged = this.autenticacion.isLoggedIn;
  }

}
