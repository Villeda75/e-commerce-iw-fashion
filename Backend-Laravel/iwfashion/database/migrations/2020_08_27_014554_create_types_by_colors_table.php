<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypesByColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('types_by_colors', function (Blueprint $table) {
            $table->id('id_types_by_color');
            $table->foreignId('id_product_type');
            $table->foreignId('id_color');
            $table->foreign('id_product_type')->references('id_product_type')->on('product_types'); //llave product_types
            $table->foreign('id_color')->references('id_color')->on('colors'); //llave colors
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('types_by_colors');
    }
}
