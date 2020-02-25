<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Order;
use App\Product;
use App\Invoice;
use DB;
class InvoiceController extends Controller
{
  // function to display the data from the invoice table
    public function index()
    {       
        $invoicedata = DB::table('invoices')->get(); 
        return $invoicedata->toJson();
      }

    // function to fetch data from the order table and products table  

    public function fetch()
    {
    
      $data = DB::table('orders')->join('products','orders.p_id','products.p_id')->where('orders.order_status','verified')->                  
        select('orders.id as id','orders.order_qty as quantity','products.p_name as product','products.price as price')->get();
        return $data->toJson();
      }
    public function store(Request $request)
    {
      $verify= DB::table('orders')->select('order_status')->where('id',$request->id)->first();
      if(!$verify='verified'){
        Invoice::where('i_no',$request->id )->delete();
        return response()->json('delted!');
      }
      $data= DB::table('invoices')->where('i_no',$request->id)->first();
      if($data){
        return response()->json('already created!');
      }else{
        $invoice = new Invoice();
        $invoice->i_no =  $request->get('id');
        $invoice->p_name =  $request->get('product');
        $invoice->order_qty =  $request->get('quantity');
        $invoice->p_price =  $request->get('price');
        $invoice->amount =  $request->get('amount');
        $invoice->save();
        return response()->json('Project created!');
      }     
    } 
}
