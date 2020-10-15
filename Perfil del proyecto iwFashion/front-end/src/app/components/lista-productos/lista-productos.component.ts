import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
  datos:any;
  selected:boolean;
  selected1:boolean;
  page: number = 1;
  total:number;
  constructor(private autenticacion:AuthService) { }

   ngOnInit(): void {
    this.autenticacion.DatosPrueba().subscribe(res=>
      {
        console.log(res);
        this.datos=res;
        this.total=this.datos.lenght;
      });

  }

}
