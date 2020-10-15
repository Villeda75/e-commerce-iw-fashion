<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id('id_order_items');
            $table->foreignId('id_product');
            $table->bigInteger('quantity');
            $table->decimal('subtotal_items',4,2);
            $table->foreignId('id_order');
            $table->foreign('id_order')->references('id_order')->on('orders'); //Llave Orders
            $table->foreign('id_product')->references('id_product')->on('products'); //Llave Products
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
