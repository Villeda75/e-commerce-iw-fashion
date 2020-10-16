<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Insertas a la base de datos

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //Funcion que inserta datos
         DB::table('sizes')->insert([

            ['size' => 'N/A'],  //registros
            ['size' => 'S'],
            ['size' => 'M'],
            ['size' => 'L'],
            ['size' => 'XL'],
            ['size' => 'XXL'],
            ['size' => 'XXXL'],
            ['size' => '5'],
            ['size' => '5.5'],
            ['size' => '6'],
            ['size' => '6.5'],
            ['size' => '7'],
            ['size' => '7.5'],
            ['size' => '8'],
            ['size' => '8.5'],
            ['size' => '9'],
            ['size' => '9.5'],
            ['size' => '10'],
            ['size' => '10.5'],
            ['size' => '11'],
            ['size' => '11.5'],
            ['size' => '12']

        ]);
    }
}
