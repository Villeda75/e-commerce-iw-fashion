<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //Insertas a la base de datos

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //Funcion que inserta datos
         DB::table('colors')->insert([

            ['color' => 'N/A'], //registros
            ['color' => 'Negro'], 
            ['color' => 'Blanco'],
            ['color' => 'Gris'],
            ['color' => 'Amarillo'],
            ['color' => 'Azul'],
            ['color' => 'Rojo'],
            ['color' => 'Verde'],
            ['color' => 'Naranja'],
            ['color' => 'Morado'],
            ['color' => 'Cafe'],
            ['color' => 'Rosado'],
            ['color' => 'Celeste'],
            ['color' => 'Mostaza'],
            ['color' => 'Beige'],
            ['color' => 'Caqui'],
            ['color' => 'Cian'],
            ['color' => 'Fucsia'],
            ['color' => 'Coral'],
            ['color' => 'Lila'],
            ['color' => 'Vino'],
            ['color' => 'Salmon'],
            ['color' => 'Rosa Palo'],
            ['color' => 'Turquesa'],
            ['color' => 'Verde Musgo'],
            ['color' => 'Aqua'],
            ['color' => 'Menta'],
            ['color' => 'Azul Royal'],
            ['color' => 'Azul Oscuro'],
            ['color' => 'Crema'],
            ['color' => 'Marfil'],
            ['color' => 'Verde Olivo'],
            ['color' => 'Champan'],
            ['color' => 'Dorado'],
            ['color' => 'Plateado'],
            ['color' => 'Bronce'],
            ['color' => 'Cobre']

        ]);
    }
}
