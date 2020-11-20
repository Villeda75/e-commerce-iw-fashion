<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gender; //Modelo
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class GenderController extends Controller
{
    //Función para mostrar marcas
    public function Genders() {
        return response()->json(['results' => Gender::all()], 200);
    }
}
