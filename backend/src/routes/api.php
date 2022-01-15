<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserGalleryController;
use App\Http\Controllers\UserInfoController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function (){
    Route::get('user', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::post('updateInfo', [UserInfoController::class, 'updateInfo']);
Route::any('userInfo/{user_id}', [UserInfoController::class, 'show']);

Route::post('galleryInfo', [UserGalleryController::class, 'galleryInfo']);
Route::any('galleryInfo/{user_id}', [UserGalleryController::class, 'show']);
Route::any('galleryInfo/{user_id}/{Photo_Id}', [UserGalleryController::class, 'showEdit']);
