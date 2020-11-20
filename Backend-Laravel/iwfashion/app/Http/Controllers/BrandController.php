<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand; //Modelo
use Symfony\Component\HttpKernel\Exception\HttpException; //Manejo de errores
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
        //header('Access-Control-Allow-Origin: *'); 
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        //$this->validate($request, [ 'brand' => 'required', ]);

            $affected = Brand::create([ 'brand' => $request->brand ]); //echo($affected->id); //6
            
            if ($affected->id > 0) {
                return response()->json(['success' => 'Brand created successfully!'], 200);
            } else {
                return response()->json(['error' => 'La función se ejecutó pero no fue insertado!'], 400);
            }
     }

    //Función para actualizar una marca por ID
     function update($id_brand, Request $request) {
        header('Access-Control-Allow-Origin: *'); 
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        $affected = DB::table('brands')->where('id_brand', $id_brand)->update(['brand' => $request->brand]);
        return response()->json(['success' => 'Brand updated successfully!'], 200);
    }

    //Función para eliminar una marca por ID
    public function destroy($id_brand) {
        DB::table('brands')->where('id_brand', $id_brand)->delete();
        return response()->json(['success','Brand deleted successfully!'], 200);
    }

    //Top Brands
    function products(){
        $topBrands = DB::select(
            'select
                id_product, slug, stock, visible, sizes.size, genders.gender, brands.brand, product_types.product_type, product_types.description,
                product_types.sales_price, product_types.discount_price, sub_categories.sub_category,
                img_colors.url_img  FROM products 
            INNER JOIN sizes            USING (id_size)
            INNER JOIN genders          USING (id_gender)
            INNER JOIN brands           USING (id_brand)
            INNER JOIN img_colors       USING (id_img_color)
            INNER JOIN types_by_colors  USING (id_types_by_color)
            INNER JOIN product_types    USING (id_product_type)
            INNER JOIN colors           USING (id_color)
            INNER JOIN sub_categories   USING (id_sub_category)');

        return response()->json(['results' => $topBrands], 200);
     }


}
