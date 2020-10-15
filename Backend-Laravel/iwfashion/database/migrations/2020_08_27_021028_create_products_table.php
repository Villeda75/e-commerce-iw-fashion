<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('id_product');
            $table->string('slug');
            $table->bigInteger('stock');
            $table->boolean('visible');
            $table->foreignId('id_sub_category');
            $table->foreignId('id_img_color');
            $table->foreignId('id_size');
            $table->foreignId('id_gender');
            $table->foreignId('id_brand');
            $table->foreign('id_size')->references('id_size')->on('sizes'); //Llave sizes
            $table->foreign('id_gender')->references('id_gender')->on('genders'); //Llave genders
            $table->foreign('id_brand')->references('id_brand')->on('brands'); //Llave brands
            $table->foreign('id_sub_category')->references('id_sub_category')->on('sub_categories'); //Llave sub_categories
            $table->foreign('id_img_color')->references('id_img_color')->on('img_colors'); //Llave img_colors
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
