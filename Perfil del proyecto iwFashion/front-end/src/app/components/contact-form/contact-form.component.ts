import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
//Sirve para trabajar con formularios reactivos y validaciones 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormContact} from '../../models/form-contact';
import {DatabaseService} from '../../services/database.service';
import { AlertasService } from '../../alertas.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public FormularioContact: FormGroup;
  ContactoActual:FormContact={name:'',email:'',tel:'',message:''};

  constructor(private router:Router,private formBuilder: FormBuilder, private database:DatabaseService, private alerta: AlertasService) { }

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
    this.database.SendFormContact(this.ContactoActual).subscribe(res=>
      {

        if (res['resultado'] == 'success') {
          //alert(res['mensaje']);

          this.alerta.showSuccessAlert(res['mensaje']);
          this.ContactoActual={name:'',email:'',tel:'',message:''};
          this.FormularioContact.reset();


        
        }
        else {
          this.alerta.showErrorAlert('Ocurrió un error al enviar el formulario');
        }

      })
   
  
  }
  }
 
}
