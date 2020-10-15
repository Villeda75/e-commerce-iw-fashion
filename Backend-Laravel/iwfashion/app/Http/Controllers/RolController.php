<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class RolController extends Controller
{
    //Funcion que se llama desde el controlador y muestra los roles de la tabla
    function index(){
        $rols = DB::table('rols')->get();
        return response()->json(['results' => $rols], 200);
     }
}
