import { Injectable,NgZone} from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: User;
  NombreUsuario:string;
  FotoPerfil:string;
  correo:string;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router, public ngZone: NgZone) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.usuario = user;
        localStorage.setItem('user', JSON.stringify(this.usuario));
        console.log(this.usuario);
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

 /* Configurar datos de usuario al iniciar sesión con nombre de usuario / contraseña,
  registrarse con nombre de usuario / contraseña e iniciar sesión con autenticación social
  proveedor en la base de datos de Firestore usando el servicio AngularFirestore + AngularFirestoreDocument*/
  /*SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  */

  async  loginWithGoogle(){
    await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.NombreUsuario=this.usuario.displayName;
    this.FotoPerfil=this.usuario.photoURL;
    this.correo=this.usuario.email;
    location.reload();
    
}
async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  alert('has salido');
  this.ClearUser();
  this.router.navigate(['/home']);
}
//Metodo que devuelve un bool para ver si esta loggeado el usuario 
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}

ClearUser()
{
  this.NombreUsuario='';
  this.FotoPerfil='';
  this.correo='';
}

// Iniciar sesión con correo electrónico / contraseña
SignIn(email, password) {
  return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
    this.ngZone.run(() => {
      alert('Inicio de sesión exitoso!');
      window.location.reload();
      //this.router.navigate(['/clientes']);
    });
    if (result.user) {
      this.usuario = result.user;
      localStorage.setItem('user', JSON.stringify(this.usuario));
      this.NombreUsuario=this.usuario.displayName;
      this.FotoPerfil=this.usuario.photoURL;
      this.correo=this.usuario.email;
      //console.log(this.usuario);
    } else {
      localStorage.setItem('user', null);
    }
  }).catch((error) => {
    // window.alert("Por favor revisar credenciales")
    alert('Por favor revisar credenciales');
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
        alert('Registro exitoso!');
        this.usuario = result.user;
        localStorage.setItem('user', JSON.stringify(this.usuario));
        console.log(this.usuario);
        //this.router.navigate(['/clientes']);
        
      } else {
        localStorage.setItem('user', null);
      }
    }).catch((error) => {
      alert('Ha ocurrido un error');
    })
}

// Enviar verificación por correo electrónico cuando se registre un nuevo usuario
SendVerificationMail() {
  return this.afAuth.currentUser.then(u => u.sendEmailVerification())
    .then(() => {
     /* this.router.navigate(['verify-email-address']);*/
     alert('correo enviado');
    })
}

// Restablecer contraseña olvidada
ForgotPassword(passwordResetEmail) {
  return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
  }).catch((error) => {
    window.alert(error)
  })
}


}


