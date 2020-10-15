<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class AuthController extends Controller
{
    //Funcion para registrar un usuario con correo/password
    public function register(Request $request) {
        
        $request->validate([
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required|min:6',
            'id_rol' => 'required'
        ]);

        /*$user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->id_rol = $request->id_rol;
        $user->save();*/

        $user = User::create([
            'name' => $request->name, 
            'email' => $request->email, 
            'password' => bcrypt($request->password),
            'id_rol' => $request->id_rol //1-2
        ]);

        //return response()->json($user);
        $token = $user->createToken('Personal Access Token')->accessToken;
 
        //usuario creado correctamente
        return response()->json(['token' => $token,'token_type' => 'Bearer Token'], 200);
    }

    /*'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer' */

    //Funcion para iniciar sesion con correo/password
    public function login(Request $request) {

        $request->validate([
            'email' => 'required|email|exists:users,email', 
            'password' => 'required'
        ]);
        
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
 
        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('Personal Access Token')->accessToken;
            return response()->json(['token' => $token,'token_type' => 'Bearer Token'], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    //Funcion para iniciar sesion con google
    //Para login with google, Marcos debe generar un password estático > 6 caracteres
    //Ejemplo: strlen($nombreUsuario) --Nombre de usuario sin espacios > 6
    public function loginWithGoogle(Request $request) {
    
        $request->validate([
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required',
            'id_rol' => 'required'
        ]);

        //Verificar si el usuario ya fue registrado (existe)
        $userArray = User::where('email',$request->email)->get();
        $id_user = $userArray[0]->id; //obtenemos el id del array
        //echo( $id_user);

        if ($id_user > 0) { //Si está registrado, inicia sesión
            
            $data = [
                'email' => $request->email,
                'password' => $request->password
            ];
            
            if (auth()->attempt($data)) {
                $token = auth()->user()->createToken('Personal Access Token')->accessToken;
                return response()->json(['token' => $token,'token_type' => 'Bearer Token'], 200);
            } else {
                return response()->json(['error' => 'Unauthorized'], 401);
            } 
            
        } else {  #Usuario no registrado, lo registramos en la tabla users

            //echo("He llegado a crear nuevo usuario");
            $user = User::create([
                'name' => $request->name, 
                'email' => $request->email, 
                'password' => $request->password,
                'id_rol' => $request->id_rol //1-2
            ]);
    
            //return response()->json($user);
            $token = $user->createToken('Personal Access Token')->accessToken;
     
            //usuario creado correctamente
            return response()->json(['token' => $token,'token_type' => 'Bearer Token'], 200);
        }

    }

    //Funcion logout (cerrar sesion)
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Successfully logged out']);
    }

    //correr de nuevo el comando cuando se realicen actualizaciones en migrations
    //php artisan passport:install

}
