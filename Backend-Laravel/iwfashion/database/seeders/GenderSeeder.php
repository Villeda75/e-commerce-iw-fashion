<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Insertas a la base de datos

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //Funcion que inserta datos
         DB::table('genders')->insert([

            ['gender' => 'Hombre'], //registros
            ['gender' => 'Mujer'],
            ['gender' => 'Unisex'],
            ['gender' => 'Niños']

        ]);
    }
}
