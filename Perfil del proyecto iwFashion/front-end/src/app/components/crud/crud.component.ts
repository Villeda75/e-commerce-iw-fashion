import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Brand} from '../../models/brand';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public FormularioBrands: FormGroup;
  arrayBrands:Brand[];
  isSelected:boolean=false;
  brandActual:Brand={id_brand:0,brand:''};
  constructor(private formBuilder: FormBuilder,private database:DatabaseService) { 

  this.ActualizarDatos();
  }

  ngOnInit(): void {
    this.buildFormBrands();
  }

  private buildFormBrands() {
    this.FormularioBrands = this.formBuilder.group({
      brand: ['', Validators.required]
    });
  }


  addOrEdit(): void {
       //Esto sirve para pasar el imput a la variable local 
    this.brandActual.brand = this.FormularioBrands.controls['brand'].value;
   
  }
  openForEdit(_brand: Brand): void {

    this.brandActual = _brand;
    //Esto sirve para pasar datos del objeto alumno seleccionado al formGroup 
    this.FormularioBrands.controls['brand'].setValue(this.brandActual.brand);
    
  }

  AgregarMarca()
  { this.addOrEdit();
    //esto srive para borrar el campo id ya que no es necesario a la hora de agregar nuevo registro
    delete this.brandActual.id_brand;
    this.database.InsertBrand(this.brandActual.brand).subscribe(res=>
      {
        if (res['resultado'] == 'success') {
          alert(res['mensaje']);
          this.ActualizarDatos(); 
        }
      });
      

      /*
      .subscribe(datos => {
    if (datos['resultado'] == 'success') {
      alert(datos['mensaje']);
      this.GetBrands();
    }
    }
      */

  }

  ActualizarMarca()
  {
    this.addOrEdit();
    if(confirm('¿Esta seguro de actualizar la marca '+this.brandActual.brand))
    {
    this.database.UpdateBrand(this.brandActual).subscribe(res=>
      {
        console.log(res);
      });
      this.ActualizarDatos();
    }
  }

  EliminarMarca(id:number)
  {
    this.database.DeleteBrand(id).subscribe(res=>
      {
        console.log(res);
      });
      this.ActualizarDatos();
  }

  ActualizarDatos()
  {
    this.database.GetBrands().subscribe((res:any)=>
    {
      this.arrayBrands=res.results;
      console.log(this.arrayBrands);
    }
    );
  }

}
