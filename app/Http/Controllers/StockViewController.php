<?php

namespace App\Http\Controllers;

use App\StockView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class StockViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product=DB::table('products')->select('products.id','products.p_id','products.p_name','products.price')->get();
        // $stock=Stock::all();
        return $product->toJson();
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
        //   $projects=new Stock();
        //       $projects->p_id = request('p_id');
        //       $projects->p_name = request('p_name');
        //       $projects->cost = request('cost');
        //       $projects->price = request('price');
        //       $projects->warehouse = request('warehouse');
        //       $projects->save();
        //   return response()->json('Project created!');
    }

    
    public function show(StockView $stock)
    {
        $stock=StockView::all();
        return $stock->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function edit(StockView $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StockView $stock)
    {
        if (request('firstId')==request('p_id') && request('secondId')==request('p_id')) {
            DB::table('stocks')
        ->updateOrInsert(
            ['p_id' => request('p_id') ],
            ['p_price' => request('price'),
            'cost'=>request('cost'),
            'p_name' => request('p_name'),
            'warehouse' => request('warehouse')]
        );

    return response()->json('Stock Updated Succesfully!');
        }
        else{
            return response()->json('Some Error Ocuured! ( Enter data of one item at a time )');
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stock $stock)
    {
        //
    }
}
