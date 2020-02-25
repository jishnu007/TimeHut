<?php

use Illuminate\Http\Request;

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
Route::get('login/{email}/{password}','LoginController@index');
Route::get('adminlogin/{email}/{password}','LoginController@admin');

Route::post('register','RegistrationController@store');
Route::get('checkmail/{mailid}', 'RegistrationController@checkmail');

Route::get('products', 'ProductController@index');
Route::get('products/{id}', 'ProductController@show');

Route::post('orders', 'OrdersController@store');
Route::get('myorders/{id}', 'OrdersController@myorders');
Route::get('myunconfirmedorders/{id}', 'OrdersController@unconfirmed');
Route::post('return', 'OrdersController@returnstore');
Route::get('ret', 'OrdersController@returncount');

Route::get('OrderProcessing', 'OrderProcessingController@index');
Route::post('updateStatus', 'OrderProcessingController@update');
Route::post('rejectOrder', 'OrderProcessingController@reject');

Route::get('QuantityCheck', 'StockController@index');
Route::post('updateProduct', 'StockController@update');
Route::get('search/{search}', 'StockController@dataList');
Route::get('supplierList', 'StockController@supplierList');

Route::get('invoiceList', 'InvoiceController@index' );
Route::get('data', 'InvoiceController@fetch' );
Route::post('store', 'InvoiceController@store' );

// ar
Route::get('showSupplier/{id}','SupplierDatacontroller@index');
Route::get('showSupplierProducts','SupplierDatacontroller@show');
Route::post('MakeOrder','SupplierDatacontroller@store');
Route::get('fetchSupplier','SupplierDatacontroller@create');

Route::get('stock',"StockViewController@index");
Route::get('show',"StockViewController@show");
Route::post('insert',"StockViewController@update");
