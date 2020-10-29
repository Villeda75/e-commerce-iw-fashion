import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../models/brand';
import { DatabaseService } from '../../services/database.service';
import { AlertasService } from '../../alertas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public FormularioBrands: FormGroup;
  public FormularioCustomD: FormGroup;
  arrayBrands: Brand[];
  isSelected: boolean = false;
  brandActual: Brand = { id_brand: 0, brand: '' };
  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService,
    private alerta: AlertasService) {

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
  
  addOrEdit(): void { //Pasar datos del formulario reactivo de brand al objeto
    //Esto sirve para pasar el imput a la variable local 
    this.brandActual.brand = this.FormularioBrands.controls['brand'].value;
  }

  openForEdit(_brand: Brand): void {
    this.brandActual = _brand;
    //Esto sirve para pasar datos del objeto alumno seleccionado al formGroup 
    this.FormularioBrands.controls['brand'].setValue(this.brandActual.brand);
  }

  AgregarMarca() {
    this.addOrEdit();

    if (this.brandActual.brand == null || this.brandActual.brand == "") {
      this.alerta.showErrorAlert('Ingrese una marca.');
    }
    else {
      //esto srive para borrar el campo id ya que no es necesario a la hora de agregar nuevo registro
      delete this.brandActual.id_brand;
      this.database.InsertBrand(this.brandActual).subscribe(res => {

        if (res['resultado'] == 'success') {
          this.alerta.showSuccessAlert(res['mensaje']);
          this.ActualizarDatos();
        }
        else {
          this.alerta.showErrorAlert('Ocurrió un error creando la marca');
        }
      });
    }

  }

  ActualizarMarca() {

    //nueva alerta
    Swal.fire({
      title: '¿Estás seguro de actualizar la marca?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,deseo actualizar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addOrEdit();
        this.database.UpdateBrand(this.brandActual).subscribe(res => {
          if (res['resultado'] == 'success') {
            
            this.alerta.showSuccessAlert(res['mensaje']);
            this.ActualizarDatos();
          }
        });
      }
    })
  }

  ActualizarDatos() {
    this.database.GetBrands().subscribe((res: any) => {
      this.arrayBrands = res.results;
      console.log(this.arrayBrands);
    }
    );
  }
  
}
