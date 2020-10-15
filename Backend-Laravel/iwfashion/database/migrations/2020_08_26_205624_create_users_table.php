<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->foreignId('id_rol');
            $table->foreign('id_rol')->references('id_rol')->on('rols'); //Llave rols
            $table->rememberToken();
            $table->timestamps();
        });
    } 
    
    //Para login with google, Marcos debe generar un password estático > 6 caracteres
    //Ejemplo: strlen($nombreUsuario) --Nombre de usuario sin espacios > 6

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
