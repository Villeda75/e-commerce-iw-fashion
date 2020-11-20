<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color; //Modelo
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class ColorController extends Controller
{
    //Función para mostrar marcas
    public function Colors() {
        return response()->json(['results' => Color::all()], 200);
    }
}
