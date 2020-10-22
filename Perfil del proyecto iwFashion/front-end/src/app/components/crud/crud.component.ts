import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../models/brand';
import { DatabaseService } from '../../services/database.service';
import { CustomDesign } from '../../models/custom-design';
import { FileHolder } from 'angular2-image-upload';
import { AlertasService } from '../../alertas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public FormularioBrands: FormGroup;
  public FormularioCustomD: FormGroup;
  arrayBrands: Brand[];
  arrayCustomDesigns: CustomDesign[];
  isSelected: boolean = false;
  isSelected2: boolean = false;
  brandActual: Brand = { id_brand: 0, brand: '' };
  designActual: CustomDesign = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };
  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService,
    private alerta: AlertasService) {

    this.ActualizarDatos();
    this.ActualizarDatosCustomDesigns();
  }

  ngOnInit(): void {
    this.buildFormBrands();
    this.buildFormCustomD();
  }

  private buildFormBrands() {
    this.FormularioBrands = this.formBuilder.group({
      brand: ['', Validators.required]
    });
  }

  private buildFormCustomD() {
    this.FormularioCustomD = this.formBuilder.group({
      designName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  //Pasar datos del formulario reactivo de brand al objeto
  addOrEdit(): void {
    //Esto sirve para pasar el imput a la variable local 

    this.brandActual.brand = this.FormularioBrands.controls['brand'].value;


  }
  openForEdit(_brand: Brand): void {

    this.brandActual = _brand;
    //Esto sirve para pasar datos del objeto alumno seleccionado al formGroup 
    this.FormularioBrands.controls['brand'].setValue(this.brandActual.brand);


  }

  // Pasar datos del formulario reactivo
  addOrEditCustomD(): void {
    //Esto sirve para pasar el imput a la variable local 
    this.designActual.designName = this.FormularioCustomD.controls['designName'].value;
    this.designActual.description = this.FormularioCustomD.controls['description'].value;

  }
  openForEditCustomD(_diseño: CustomDesign): void {

    this.designActual = _diseño;
    //Esto sirve para pasar datos del objeto alumno seleccionado al formGroup 
    this.FormularioCustomD.controls['designName'].setValue(this.designActual.designName);
    this.FormularioCustomD.controls['description'].setValue(this.designActual.description);

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
          //alert(res['mensaje']);

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
    //this.addOrEdit();

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
            //alert(res['mensaje']);
            
            this.alerta.showSuccessAlert(res['mensaje']);
            this.ActualizarDatos();
            this.designActual = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };
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

  ActualizarDatosCustomDesigns() {
    this.database.GetCustomDesigns().subscribe((res: any) => {
      this.arrayCustomDesigns = res.results.map(item => {


        //Se asigna los campos necesarios que viene del json a una variable de tipo Custom Design 
        // para asignarlos localmente 
        var _customD: CustomDesign = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };
        _customD.id_customDesign = item.id_custom_design;
        _customD.description = item.description;
        _customD.base64textString = item.url_img;
        _customD.designName = item.name;
        _customD.nombreArchivo = '';
        _customD.type = '';
        return _customD;
      });
      console.log(this.arrayCustomDesigns);
    }
    );
  }

  //var result = arr.map(person => ({ value: person.id, text: person.name }));
  subirImagen(imagen: FileHolder) {
    //event es un elemento de tipo fileholder que contiene la informacion de la imagen
    console.log();
    this.designActual.base64textString = imagen.src;
    this.designActual.nombreArchivo = imagen.file.name;
    this.designActual.type = imagen.file.type;
    var array: string[] = this.designActual.base64textString.split(',');
    this.designActual.base64textString = array[1];
    console.log(this.designActual.base64textString);
  }

  

  //Eliminar imagen
  onRemoved(file: FileHolder) {
    console.log(file);
    this.designActual.base64textString = '';
    this.designActual.nombreArchivo = '';
    this.designActual.type = '';
  }

  InsertarCustomDesign() {

    Swal.fire({
      title: '¿Estás seguro de publicar este diseño?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,deseo publicarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addOrEditCustomD();
        console.log(this.designActual);
        delete this.designActual.id_customDesign;
        this.database.InsertCustomDesign(this.designActual).subscribe(res => {
          if (res['resultado'] == 'success') {
            //alert(res['mensaje']);
            this.alerta.showSuccessAlert(res['mensaje']);
            this.ActualizarDatosCustomDesigns();
          }
        });
       
      }
    })
  }
  DeletCustomDesign(_customDesign: CustomDesign) {

    Swal.fire({
      title: '¿Estás seguro de eliminar este diseño?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.database.DeleteCustomDesign(_customDesign).subscribe(res => {
          if (res['resultado'] == 'success') {
            //alert(res['mensaje']);
            this.alerta.showSuccessAlert(res['mensaje']);
            this.ActualizarDatosCustomDesigns();
          }
        });
      }
    })

  }
  UpdateCustomDesign() {

    Swal.fire({
      title: '¿Estás seguro de actualizar este diseño?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,deseo actualizarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addOrEditCustomD();
      console.log(this.designActual);

      this.database.UpdateCustomDesign(this.designActual).subscribe(res => {
        if (res['resultado'] == 'success') {
          //alert(res['mensaje']);
          this.alerta.showSuccessAlert(res['mensaje']);
          this.ActualizarDatosCustomDesigns();
        }
      });
      }
    })

    
  }
}

