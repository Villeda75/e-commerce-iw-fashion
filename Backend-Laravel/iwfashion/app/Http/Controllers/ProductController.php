<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; //importamos para hacer consultas a la bd

class ProductController extends Controller
{
    //----------------------------- TODOS LOS PRODUCTOS POR GENERO ---------------------
    //Muestra todos los productos
    function products(){
        $products = DB::select(
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

        return response()->json(['results' => $products], 200);
     }

     //Muestra todos los productos de hombres
     function menProducts(){
        $menProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            WHERE genders.gender = 'Hombre'");

        return response()->json(['results' => $menProducts], 200);
     }

     //Muestra todos los productos de mujeres
     function womenProducts(){
        $womenProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            WHERE genders.gender = 'Mujer'");

        return response()->json(['results' => $womenProducts], 200);
     }

     //Muestra todos los productos de niños/as
     function kidsProducts(){
        $childrenProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            WHERE genders.gender = 'Niños'");

        return response()->json(['results' => $childrenProducts], 200);
     }
     
     //---------------------------------- ROPA POR GENERO -------------------------------

     //Muestra todos los productos de ropa para hombre
     function menClothesProducts(){
        $menClothesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Hombre' AND categories.category = 'Ropa'");

        return response()->json(['results' => $menClothesProducts], 200);
     }

     //Muestra todos los productos de ropa para mujer
     function womenClothesProducts(){
        $womenClothesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Mujer' AND categories.category = 'Ropa'");

        return response()->json(['results' => $womenClothesProducts], 200);
     }

     //Muestra todos los productos de ropa para niños/as
     function kidsClothesProducts(){
        $kidsClothesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Niños' AND categories.category = 'Ropa'");

        return response()->json(['results' => $kidsClothesProducts], 200);
     }

     //----------------------------  ZAPATOS POR GENERO -------------------------------
     
     //Muestra todos los productos de calzado para hombre
     function menShoesProducts(){
        $menShoesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Hombre' AND categories.category = 'Zapatos'");

        return response()->json(['results' => $menShoesProducts], 200);
     }

     //Muestra todos los productos de calzado para mujer
     function womenShoesProducts(){
        $womenShoesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Mujer' AND categories.category = 'Zapatos'");

        return response()->json(['results' => $womenShoesProducts], 200);
     }

     //Muestra todos los productos de calzado para niños/as
     function kidShoesProducts(){
        $kidShoesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Niños' AND categories.category = 'Zapatos'");

        return response()->json(['results' => $kidShoesProducts], 200);
     }

     //----------------------------  ACCESORIOS POR GENERO -------------------------------
     
     //Muestra todos los productos de accesorios para hombre
     function menAccesoriesProducts(){ 
        $menAccesoriesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Hombre' AND categories.category = 'Accesorios'");

        return response()->json(['results' => $menAccesoriesProducts], 200);
     }

     //Muestra todos los productos de accesorios para mujer
     function womenAccesoriesProducts(){
        $womenAccesoriesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Mujer' AND categories.category = 'Accesorios'");

        return response()->json(['results' => $womenAccesoriesProducts], 200);
     }

     //Muestra todos los productos de accesorios para niños/as
     function kidsAccesoriesProducts(){
        $kidsAccesoriesProducts = DB::select(
            "select
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
            INNER JOIN sub_categories   USING (id_sub_category)
            INNER JOIN categories       USING (id_category)
            WHERE genders.gender = 'Niños' AND categories.category = 'Accesorios'");

        return response()->json(['results' => $kidsAccesoriesProducts], 200);
     }
     
}
