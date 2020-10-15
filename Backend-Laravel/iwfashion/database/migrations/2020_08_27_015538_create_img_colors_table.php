<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImgColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('img_colors', function (Blueprint $table) {
            $table->id('id_img_color');
            $table->foreignId('id_types_by_color'); 
            $table->string('url_img');
            $table->foreign('id_types_by_color')->references('id_types_by_color')->on('types_by_colors'); //llave types_by_colors
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('img_colors');
    }
}
