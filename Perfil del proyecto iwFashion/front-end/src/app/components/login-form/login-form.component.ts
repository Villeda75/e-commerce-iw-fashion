import { Component, OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { User } from  'firebase';
import { AlertasService } from '../../alertas.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  UsuarioActual:User;
  emailVerifiedCurrent:boolean=false;
  hide = true;
  hide1 = true;
  hide2 = true;
  //Campos de correo y contraseña para logging
  correo:string;
  password:string;
  //Campos para crear nuevo usuario con correo y contraseña
  newCorreo:string;
  newPassword:string;
  newPassword2:string;
  AreEqual:boolean=false;

  //This variable shows a template depeding upon if a verification email has been sent
  showTemplate:boolean=false;

  //
  ResetEmail:string='';

  constructor(
    private dialogRef: MatDialogRef<LoginFormComponent>, 
    @Inject(MAT_DIALOG_DATA) data,
    public autenticacion:AuthService,
    private RouterActual:ActivatedRoute,
    private router:Router,
    private alerta: AlertasService
    ) { 
    console.log(this.autenticacion.usuario);
  }

  ngOnInit(): void {
  }

  LogginGoogle()
  {
  this.autenticacion.loginWithGoogle();
  this.router.navigate(['/']);
   
  }

  CreateAccount(correo:string,password:string)
  {
  this.autenticacion.SignUp(correo,password).then(res=>
    {
      this.alerta.showSuccessAlert('Registro exitoso');
      this.showTemplate=true;
      this.router.navigate(['/']);
    })
    .catch(err=>{
     // alert('Ha ocurrido un error');
      this.alerta.showErrorAlert('Ha ocurrido un error, intente de nuevo.');
      this.showTemplate=false;
      console.error(err);
          });

   
  }

  ComprobarPassword()
  {

    if(this.newPassword==this.newPassword2)
    {
      this.AreEqual=true;
    }
    else
    {
      this.AreEqual=false;
    }
    

  }

  IngresarNormal(correo:string,pass:string)
  {
    this.autenticacion.SignIn(correo,pass).then(res=>{
      this.router.navigate(['/']);
    })
    .catch(err=>{
      //alert('Ha ocurrido un error revisar credenciales');
      this.alerta.showErrorAlert('Las credenciales no coinciden.');
      console.error(err);
        })
  }

  RecuperarPassword(correo:string)
  {
  this.autenticacion.ForgotPassword(correo);
  }


}
