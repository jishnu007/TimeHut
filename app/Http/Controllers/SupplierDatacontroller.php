<?php

namespace App\Http\Controllers;

use App\Supplier;
use App\product;
use Illuminate\Http\Request;
use App\SupplierOrder;
use App\stock;
class SupplierDatacontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $data=\DB::table('th_supplier_data')->where('s_id','=',$id)->get();
        return $data->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      $sAll=\DB::table('th_supplier_data')->select('s_id','s_name')->get();
      return $sAll->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {         $IncCount=request('Count');
              $projects=new SupplierOrder();
              $projects->p_id =request('p_id');
              $projects->s_id = request('s_id');
              $projects->count =request('Count');
              $projects->save();
              $oldval=\DB::table('stocks')->select('product_qty')->where('p_id','=',request('p_id'))->first();
              $oldstock=\DB::table('stocks')->select('stock_qty')->where('p_id','=',request('p_id'))->first();
              $totalval=$oldval->product_qty+$IncCount;
              $totalstock=$oldstock->stock_qty+$IncCount;

            \DB::table('stocks')
        ->updateOrInsert(
            ['p_id' => request('p_id') ],
            ['stock_qty' =>$totalstock,
            'product_qty'=>$totalval]

        );


          return response()->json('Successfully Added!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $pData=\DB::table('products')->get();
        return $pData->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function edit(Supplier $supplier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Supplier $supplier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        //
    }
}
