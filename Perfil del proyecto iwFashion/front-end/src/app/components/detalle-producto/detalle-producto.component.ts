import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
 
  SlideOptions = { items: 1, dots: true, nav: true, loop: true,
  
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 1000,
    navText: ['Anterior', 'Siguiente'], };  
  constructor() { }

  ngOnInit(): void {
    
  }

}
