<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class ProductController extends Controller
{
    //Funcion que se llama desde el controlador y muestra todos los productos
    function products(){
        $products = DB::select(
            'select
                id_product, slug, stock, visible, sizes.size, genders.gender, brands.brand, product_types.product_type, product_types.description,
                product_types.sales_price, product_types.discount_price, sub_categories.sub_category,
                img_colors.url_img
            FROM
                products
            INNER JOIN sizes 
                USING (id_size)
            INNER JOIN genders 
                USING (id_gender)
            INNER JOIN brands 
                USING (id_brand)
            INNER JOIN img_colors 
                USING (id_img_color)
            INNER JOIN types_by_colors 
                USING (id_types_by_color)
            INNER JOIN product_types 
                USING (id_product_type)
            INNER JOIN colors 
                USING (id_color)
            INNER JOIN sub_categories 
                USING (id_sub_category)');

        return response()->json(['results' => $products], 200);
        
     }
}
