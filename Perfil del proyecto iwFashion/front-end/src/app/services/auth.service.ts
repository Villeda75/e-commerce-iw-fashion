import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertasService } from '../alertas.service';
import Swal from 'sweetalert2';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URI = 'https://jsonplaceholder.typicode.com/photos';
  usuario: User;
  NombreUsuario: string;
  FotoPerfil: string;
  correo: string;
  isAdmi: boolean = false;


  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private http: HttpClient,
    private alerta: AlertasService,
    private database: DatabaseService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.usuario = user;
        localStorage.setItem('user', JSON.stringify(this.usuario));
        //console.log(this.usuario);
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {

      let registrarUser = { name: res.user.displayName, email: res.user.email };
      this.database.RegisterUser(registrarUser).subscribe(res=>
        {
          console.log(res['mensaje']);
        });

      this.ngZone.run(() => {

        this.alerta.showSuccessAlert('Inicio de sesión exitoso!');

        //Tiempo de espera para mostrar el alert y después redirigir a inicio
        //setTimeout(() => { window.location.href = 'https://login-iwfashion.web.app/'; }, 1700);
        setTimeout(() => { window.location.href = 'http://localhost:4200/'; }, 1700);

        this.NombreUsuario = this.usuario.displayName;
        this.FotoPerfil = this.usuario.photoURL;
        this.correo = this.usuario.email;
      });
    });

  }
  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('carrito');
    this.alerta.showSuccessAlert('Sesión cerrada exitosamente!');
    this.ClearUser();

    //Tiempo de espera para mostrar el alert y después redirigir a inicio
    //setTimeout(() => { window.location.href = 'https://login-iwfashion.web.app/'; }, 1700);
    setTimeout(() => { window.location.href = 'http://localhost:4200/'; }, 1700);
  }

  //Metodo que devuelve un bool para ver si esta loggeado el usuario 
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  ClearUser() {
    this.NombreUsuario = '';
    this.FotoPerfil = '';
    this.correo = '';
  }

  // Iniciar sesión con correo electrónico / contraseña
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        //alert('Inicio de sesión exitoso!'); 
        //window.location.reload();

        this.alerta.showSuccessAlert('Inicio de sesión exitoso!');

        if (result.user.email == "admifashion4@gmail.com") {
          this.isAdmi = true;
        }

      });

      if (result.user) {
        this.usuario = result.user;
        localStorage.setItem('user', JSON.stringify(this.usuario));
        this.NombreUsuario = this.usuario.displayName;
        this.FotoPerfil = this.usuario.photoURL;
        this.correo = this.usuario.email;
        //console.log(this.usuario);

      } else {
        localStorage.setItem('user', null);
      }
    }).catch((error) => {
      // window.alert("Por favor revisar credenciales")
      //alert('Por favor revisar credenciales');
      this.alerta.showErrorAlert('Revise sus credenciales');
    })
  }

  // Regístrese con correo electrónico / contraseña
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Llame a la función SendVerificaitonMail () cuando un nuevo usuario firme
        y vuelve la funcion*/
        this.SendVerificationMail();
        if (result.user) {
          //alert('Registro exitoso!');
          this.alerta.showSuccessAlert('Registro exitoso!');
          this.usuario = result.user;
          localStorage.setItem('user', JSON.stringify(this.usuario));

          let registrarUser = { name: "", email: this.usuario.email };

          this.database.RegisterUser(registrarUser).subscribe(res=>
            {
              console.log(res['mensaje']);
            });;

        } else {
          localStorage.setItem('user', null);
        }
      }).catch((error) => {
        //alert('Ha ocurrido un error');
        this.alerta.showErrorAlert('Ha ocurrido un error');
      })
  }

  // Enviar verificación por correo electrónico cuando se registre un nuevo usuario
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        /* this.router.navigate(['verify-email-address']);*/
        Swal.fire('Se ha enviado un correo para verificar su cuenta');

        //alert('correo enviado');
      })
  }

  // Restablecer contraseña olvidada
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        //window.alert('Password reset email sent, check your inbox.');
        Swal.fire('Se ha enviado un correo para restablecer su constraseña');
      }).catch((error) => {
        //window.alert(error)
        this.alerta.showErrorAlert(error);
      })
  }


  DatosPrueba() {
    return this.http.get(this.URI);
  }
}


