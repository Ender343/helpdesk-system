<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TicketController;
use App\Models\User;

Route::middleware('auth:sanctum')->get('/usuarios', function () {
    return User::select('id','name')->get();
});

Route::middleware('auth:sanctum')->group(function () {

Route::get('/tickets',[TicketController::class,'index']);
Route::post('/tickets',[TicketController::class,'store']);
Route::get('/tickets/{id}',[TicketController::class,'show']);
Route::put('/tickets/{id}',[TicketController::class,'update']);

});

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

});