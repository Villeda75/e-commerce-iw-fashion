<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomDesign; //Modelo

class CustomDesignController extends Controller
{
    //
    public function Designs() {
        return response()->json(['results' => CustomDesign::all()], 200);
    }
}
