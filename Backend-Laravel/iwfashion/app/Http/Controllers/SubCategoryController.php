<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubCategory; //Modelo
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class SubCategoryController extends Controller
{
    //Función para mostrar marcas
    public function SubCategory() {
        return response()->json(['results' => SubCategory::all()], 200);
    }
}
