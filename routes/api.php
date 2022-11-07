<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function()  {
    
});
Route::post('/add_product', [ProductController::class, 'create']);
Route::get('/get_all_products', [ProductController::class, 'list']);
Route::get('/get_edit_product/{id}', [ProductController::class, 'edit']);


