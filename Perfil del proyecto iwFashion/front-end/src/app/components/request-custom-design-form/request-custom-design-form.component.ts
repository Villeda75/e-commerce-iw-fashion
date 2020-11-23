import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Router,ActivatedRoute} from '@angular/router';
//Sirve para trabajar con formularios reactivos y validaciones 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../../services/database.service';
import { AlertasService } from '../../alertas.service';
import { FileHolder } from 'angular2-image-upload';

//importando los modelos de datos
import {CustomDesign} from '../../models/custom-design';
import {FormContact} from '../../models/form-contact';

@Component({
  selector: 'app-request-custom-design-form',
  templateUrl: './request-custom-design-form.component.html',
  styleUrls: ['./request-custom-design-form.component.css']
})
export class RequestCustomDesignFormComponent implements OnInit {
  public FormularioContact: FormGroup;
  id:number=0;
  ContactoActual:FormContact={name:'',email:'',tel:'',message:''};
  designActual: CustomDesign = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };
  imagen:string;

  constructor(
    
    private router:Router,
    private formBuilder: FormBuilder,
    private database:DatabaseService, 
    private alerta: AlertasService,
    private dialogRef: MatDialogRef<RequestCustomDesignFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      if(data.id)
      {
      this.id=data.id;
      if(data.id>0)
      {
      this.imagen=data.url_img;
      }
      }
    }

  ngOnInit(): void {
    this.buildFormContact();
  }


  NavigateHome()
  {
    this.router.navigate(['/home']);
  }

  private buildFormContact() {
    this.FormularioContact = this.formBuilder.group({
      nombre: ['', Validators.required],
      email:['', Validators.required],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
    

    });
  }

//Pasar datos del formulario reactivo de brand al objeto
  addOrEdit(): void {
       //Esto sirve para pasar el imput a la variable local 
       this.ContactoActual.name=this.FormularioContact.controls['nombre'].value;
       this.ContactoActual.email=this.FormularioContact.controls['email'].value;
       this.ContactoActual.tel=this.FormularioContact.controls['telefono'].value;
       this.ContactoActual.message=this.FormularioContact.controls['mensaje'].value;
       
  }

  EnviarFormulario()
  {
  if(confirm('¿Esta seguro de enviar este formulario?'))
  {
    this.addOrEdit();
  
    //esto sirve para unir los json
    let RequestDesign=Object.assign(this.ContactoActual,this.designActual);
    console.log(RequestDesign);
    this.database.SendRequestDesign(RequestDesign).subscribe(res=>
      {

        if (res['resultado'] == 'success') {
          this.alerta.showSuccessAlert(res['mensaje']);

          this.ContactoActual={name:'',email:'',tel:'',message:''};
          this.FormularioContact.reset();

        } else {
          this.alerta.showErrorAlert(res['mensaje']);
        }
      })
      
  }
  }

  EnviarFormularioConId()
  {
  if(confirm('¿Esta seguro de enviar este formulario?'))
  {
    this.addOrEdit();

    //esto sirve para unir los json
    let RequestDesign=Object.assign(this.ContactoActual,{"id_customDesign":this.id,"url_img":this.imagen});
  
    this.database.SendRequestDesignCreated(RequestDesign).subscribe(res=>
      {

        if (res['resultado'] == 'success') {
          //alert(res['mensaje']);

          this.alerta.showSuccessAlert(res['mensaje']);
          this.ContactoActual={name:'',email:'',tel:'',message:''};
          this.FormularioContact.reset();
          
        }
        else {
          this.alerta.showErrorAlert(res['mensaje']);
        }
      })
  }
  }
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

}
