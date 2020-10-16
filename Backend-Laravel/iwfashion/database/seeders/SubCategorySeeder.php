<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Insertas a la base de datos

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('sub_categories')->insert([
            
            [
            'sub_category' => 'Camisas',
            'id_category' => 1 ,
           
            ],
            [
                'sub_category' => 'Blusas',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Vestidos',
                'id_category' => 1 ,
               
            ],
            [
                'sub_category' => 'Pantalones',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Shorts',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Faldas',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Calcetines',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Ropa Interior',
                'id_category' => 1,
               
            ],
            [
                'sub_category' => 'Deportivos',
                'id_category' => 2 ,
               
            ],
            [
                'sub_category' => 'Casuales',
                'id_category' => 2,
               
            ],
            [
                'sub_category' => 'Tacones',
                'id_category' => 2,
               
            ],
            [
                'sub_category' => 'Perfumes',
                'id_category' => 3,
               
            ],
            [
                'sub_category' => 'Cinturones',
                'id_category' => 3,
               
            ]
    ]);
    }
}
