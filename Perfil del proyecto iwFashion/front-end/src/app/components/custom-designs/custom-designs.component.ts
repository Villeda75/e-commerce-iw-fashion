import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { CustomDesign } from '../../models/custom-design';
import { FileHolder } from 'angular2-image-upload';
import { AlertasService } from '../../alertas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-custom-designs',
  templateUrl: './custom-designs.component.html',
  styleUrls: ['./custom-designs.component.css']
})
export class CustomDesignsComponent implements OnInit {

  public FormularioCustomD: FormGroup;
  arrayCustomDesigns: CustomDesign[];
  isSelected: boolean = false;
  isSelected2: boolean = false;
  designActual: CustomDesign = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };


  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService,
    private alerta: AlertasService) { this.ActualizarDatosCustomDesigns(); }

  ngOnInit(): void {
    this.buildFormCustomD();
  }

  private buildFormCustomD() {
    this.FormularioCustomD = this.formBuilder.group({
      designName: ['', Validators.required],
      description: ['', Validators.required],
    });
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
             this.FormularioCustomD.reset();
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
            this.FormularioCustomD.reset();
          }
        });
      }
    })
  }


}
