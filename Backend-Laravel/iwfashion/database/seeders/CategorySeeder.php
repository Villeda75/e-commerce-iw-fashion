<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Insertas a la base de datos

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
       //Funcion que inserta datos
       DB::table('categories')->insert([

        ['category' => 'Ropa'], //registros
        ['category' => 'Zapatos'],
        ['category' => 'Accesorios']
  

    ]);
    }
}
