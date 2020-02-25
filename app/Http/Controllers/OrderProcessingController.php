<?php

namespace App\Http\Controllers;
use App\Order;
use Illuminate\Http\Request;
use DB;
class OrderProcessingController extends Controller
{
    public function index()
    {
        $submitted = 'submitted';
        $orderProcessing=DB::table('orders')->join('stocks','stocks.p_id','orders.p_id')
        ->select('orders.id as id','orders.p_id as pid','stocks.p_name as item','orders.date_of_order as date_of_order','orders.order_qty as order_qty','orders.total_price as total_price','orders.c_id as c_id')
        ->where('orders.order_status','=',$submitted )->get();
        

        return $orderProcessing->toJson();
    }
    public function update(Request $request, Order $Order)
    {

        DB::table('orders')
        ->updateOrInsert(
            ['p_id' => request('p_id') ],
            ['order_status' => request('status')]
        );
        return response()->json('Order Verified');
        
    }
    public function reject(Request $request, Order $Order)
    {
        DB::table('orders')
        ->updateOrInsert(
            ['p_id' => request('p_id') ],
            ['order_status' => request('status')]
        );
        return response()->json('Oreder Rejected');
    }
}
