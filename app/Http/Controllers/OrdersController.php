<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderReturn;
use Illuminate\Http\Request;


class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    //     $id = $request->get('p_id');

    //   $query =\DB::table('orders')->join('products','orders.p_id','products.p_id')->where('orders.c_id', $id)->select('orders.c_id as c_id','orders.id as o_id','products.p_name as p_name','products.p_image as p_image','orders.order_ref_no as ref','orders.total_price as price','orders.order_qty as qty','orders.date_of_order as dor')->get();

    //   return $query->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $productdetails = new Order();

        $productdetails->p_id =  $request->get('p_id');
        $productdetails->date_of_order =  $request->get('date_of_order');
        $productdetails->order_qty =  $request->get('order_qty');
        $productdetails->total_price =  $request->get('total_price');
        $productdetails->c_id =  $request->get('c_id');
        $productdetails->order_status =  $request->get('order_status');
        $productdetails->s_id =  $request->get('s_id');
        $productdetails->order_ref_no =  $request->get('order_ref_no');

        $productdetails->save();
        return response()->json('Order Success.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function returnstore(Request $request)
    {
        $query=new OrderReturn();
        $query->c_id=$request->get('c_id');
        $query->order_ref_no=$request->get('ref');
        $query->date_of_order=$request->get('dor');
        $query->total_price=$request->get('price');
        $query->reason=$request->get('reason');
        $query->save();
        return response()->json('Added Succesfully!');
    }

    public function returncount()
    {
      $ret=OrderReturn::all();
      return $ret->toJson();
    }

    public function myorders($id)
    {
        
      $query =\DB::table('orders')->join('products','orders.p_id','products.p_id')->where('orders.c_id', $id)->where('orders.order_status', 'verified')->select('orders.c_id as c_id','orders.id as o_id','products.p_name as p_name','products.p_image as p_image','orders.order_ref_no as ref','orders.total_price as price','orders.order_qty as qty','orders.date_of_order as dor')->get();

      return $query->toJson();
    }

    public function unconfirmed($id)
    {
        
      $query =\DB::table('orders')->join('products','orders.p_id','products.p_id')->where('orders.c_id', $id)->where('orders.order_status', 'submitted')->select('orders.c_id as c_id','orders.id as o_id','products.p_name as p_name','products.p_image as p_image','orders.order_ref_no as ref','orders.total_price as price','orders.order_qty as qty','orders.date_of_order as dor')->get();

      return $query->toJson();
    }
}
