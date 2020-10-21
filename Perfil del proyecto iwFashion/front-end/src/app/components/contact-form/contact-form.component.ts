import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
//Sirve para trabajar con formularios reactivos y validaciones 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormContact} from '../../models/form-contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public FormularioContact: FormGroup;
  ContactoActual:FormContact={nombre:'',email:'',telefono:'',mensaje:''};

  constructor(private router:Router,private formBuilder: FormBuilder) { }

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
       this.ContactoActual.nombre=this.FormularioContact.controls['nombre'].value;
       this.ContactoActual.email=this.FormularioContact.controls['email'].value;
       this.ContactoActual.telefono=this.FormularioContact.controls['telefono'].value;
       this.ContactoActual.mensaje=this.FormularioContact.controls['mensaje'].value;
       
  }

  EnviarFormulario()
  {
  if(confirm('¿Esta seguro de enviar este formulario?'))
  {
    this.addOrEdit();
    console.log(this.ContactoActual);
    this.ContactoActual={nombre:'',email:'',telefono:'',mensaje:''};
    this.FormularioContact.reset();
  
  }
  }
 
}
