<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Importar todos los controladores a utilizar
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Register y login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/login/google', [AuthController::class, 'loginWithGoogle']);

//products
Route::get('/products', [ProductController::class, 'products']);

//Rutas protegidas, tiene que estar logeado para acceder mediante el token 
Route::middleware('auth:api')->group(function() {
    Route::get('/rols', [RolController::class, 'index']); //obtener roles en JSON
    Route::get('/logout', [AuthController::class, 'logout']); //cerrar sesión
});