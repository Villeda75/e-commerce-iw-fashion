<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderItem; //Modelo
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd
class OrderItemsController extends Controller
{
    //Funciones que se llaman desde api routes

    //Top Products
    function ProductoMasVendido(){
        $MasVendido = DB::select(
            'select slug, SUM(quantity) AS sales, product_types.product_type, colors.color, sizes.size, genders.gender, brands.brand FROM order_items 
            INNER JOIN products USING (id_product) 
            INNER JOIN img_colors USING (id_img_color) 
            INNER JOIN types_by_colors USING (id_types_by_color) 
            INNER JOIN colors USING (id_color) 
            INNER JOIN product_types USING (id_product_type) 
            INNER JOIN sizes USING (id_size) 
            INNER JOIN genders USING (id_gender) 
            INNER JOIN brands USING (id_brand) GROUP BY id_product ORDER BY sales DESC LIMIT 3');

        return response()->json(['results' => $MasVendido], 200);
     }

    
    function ProductoMenosVendido(){
        $MenosVendido = DB::select(
            'select slug, SUM(quantity) AS sales, product_types.product_type, colors.color, sizes.size, genders.gender, brands.brand, slug FROM order_items 
            INNER JOIN products USING (id_product) 
            INNER JOIN img_colors USING (id_img_color) 
            INNER JOIN types_by_colors USING (id_types_by_color) 
            INNER JOIN colors USING (id_color) 
            INNER JOIN product_types USING (id_product_type) 
            INNER JOIN sizes USING (id_size) 
            INNER JOIN genders USING (id_gender) 
            INNER JOIN brands USING (id_brand) GROUP BY id_product ORDER BY sales ASC LIMIT 3');

        return response()->json(['results' => $MenosVendido], 200);
     }

     //Top Brands
    function MarcaMasVendida(){
        $MarcaMasVendida = DB::select(
            'select SUM(quantity) AS sales,brands.brand FROM order_items 
            INNER JOIN products USING (id_product) 
            INNER JOIN brands USING (id_brand) GROUP BY brand ORDER BY sales DESC LIMIT 3');

        return response()->json(['results' => $MarcaMasVendida], 200);
     }

     //Top Products
    function MarcaMenosVendida(){
        $MarcaMenosVendida = DB::select(
            'select SUM(quantity) AS sales,brands.brand FROM order_items 
            INNER JOIN products USING (id_product) 
            INNER JOIN brands USING (id_brand) GROUP BY brand ORDER BY sales ASC LIMIT 3');

        return response()->json(['results' => $MarcaMenosVendida], 200);
     }
}
