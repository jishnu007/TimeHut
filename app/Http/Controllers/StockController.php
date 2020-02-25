<?php

namespace App\Http\Controllers;
use App\Stock;
use Illuminate\Http\Request;
use DB;

class StockController extends Controller
{
    public function index()
    {
        $productQuantityCheck=DB::table('stocks')->get();
        return $productQuantityCheck->toJson();
    }
    public function update(Request $request, Stock $stock)
    {

        DB::table('stocks')->updateOrInsert(
            ['p_id' => $request->get('p_id') ],
            ['product_qty' => $request->get('quantity')]
        );
    return response()->json('Project created!');
    }

    public function dataList( $search)
    {
        $stock= \DB::table('th_supplier_data')->join('products as p', 'p.p_id', '=', 'th_supplier_data.p_id')->select('p.id','p.price','p.p_name','p.category','p.p_image')->where('th_supplier_data.s_name',  $search )->get();
        return $stock->toJson();
    }

    public function supplierList()
    {
        $stock= \DB::table('th_supplier_data')->select('s_name')->get();
        return $stock->toJson();
    }
}
