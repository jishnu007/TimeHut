<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $table = 'stocks';
    protected $fillable = ['id', 'p_id','p_name','stock_qty','product_qty','cost','p_price','warehouse'];
}
