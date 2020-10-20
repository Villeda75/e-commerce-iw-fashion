<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Importar todos los controladores a utilizar
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Controllers;
use App\Http\Controllers\RolController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CustomDesignController;

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

//All Products
Route::get('/products', [ProductController::class, 'products']); //All 
Route::get('/products/{id}', [ProductController::class, 'productById']); //By Id
Route::get('/products/men', [ProductController::class, 'menProducts']); //Men
Route::get('/products/women', [ProductController::class, 'womenProducts']); //Women
Route::get('/products/kids', [ProductController::class, 'kidsProducts']); //Kids

//Clothes by gender
Route::get('/clothes/men', [ProductController::class, 'menClothesProducts']); //Men
Route::get('/clothes/women', [ProductController::class, 'womenClothesProducts']); //Women
Route::get('/clothes/kids', [ProductController::class, 'kidsClothesProducts']); //Kids

//Shoes by gender
Route::get('/shoes/men', [ProductController::class, 'menShoesProducts']); //Men
Route::get('/shoes/women', [ProductController::class, 'womenShoesProducts']); //Women
Route::get('/shoes/kids', [ProductController::class, 'kidShoesProducts']); //Kids

//Accesories by gender
Route::get('/accesories/men', [ProductController::class, 'menAccesoriesProducts']); //Men
Route::get('/accesories/women', [ProductController::class, 'womenAccesoriesProducts']); //Women
Route::get('/accesories/kids', [ProductController::class, 'kidsAccesoriesProducts']); //Kids

//Brands CRUD
Route::get('/brands', [BrandController::class, 'Brands']); //All
Route::post('/brands', [BrandController::class, 'store']); //Create
Route::post('/brands-update/{id}', [BrandController::class, 'update']); //Update
Route::post('/brands-delete/{id}', [BrandController::class, 'destroy']); //Delete

//CustomDesign
Route::get('/customDesigns', [CustomDesignController::class, 'Designs']); //All

//Rutas protegidas, tiene que estar logeado para acceder mediante el token 
Route::middleware('auth:api')->group(function() {
    Route::get('/rols', [RolController::class, 'index']); //obtener roles en JSON
    Route::get('/logout', [AuthController::class, 'logout']); //cerrar sesión
});


/*Route::put('/brands/{id}', function ($id, Request $request) {

        $affected = DB::table('brands')->where('id_brand', $id)->update(['brand' => $request->brand]);
        return response()->json(['success' => 'Brand updated successfully!'], 200);
});*/