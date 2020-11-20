<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Size; //Modelo
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class SizeController extends Controller
{
    //Función para mostrar marcas
    public function Sizes() {
        return response()->json(['results' => Size::all()], 200);
    }
}
