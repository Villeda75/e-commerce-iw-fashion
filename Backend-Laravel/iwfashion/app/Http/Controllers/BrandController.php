<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;

use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class BrandController extends Controller
{
    //Función para mostrar marcas
    public function Brands() {
        return response()->json(['results' => Brand::all()], 200);
    }

    //Función para crear un nuevo registro de marca
    function store(Request $request) {
        //$request->validate([ 'brand' => 'required' ]);
        $this->validate($request, [ 'brand' => 'required', ]);

        $affected = Brand::create([ 'brand' => $request->brand ]); //echo($affected->id); //6
        
        if ($affected->id > 0) {
            return response()->json(['success' => 'Brand created successfully!'], 200);
        } else {
            return response()->json(['error' => 'La funcion se ejecutó pero no fue insertado!'], 400);
        }
     }

    //Función para editar una marca por ID
     function edit(Brand $brand) {
        return response()->json(['results' => compact('brand') ], 200);
    }

    //Función para actualizar una marca por ID
     function update($id_brand, Request $request) {
        $affected = DB::table('brands')->where('id_brand', $id_brand)->update(['brand' => $request->brand]);
        return response()->json(['success' => 'Brand updated successfully!'], 200);
    }

    //Función para eliminar una marca por ID
    public function destroy($id_brand) {
        DB::table('brands')->where('id_brand', $id_brand)->delete();
        return response()->json(['success','Brand deleted successfully!'], 200);
    }
}
