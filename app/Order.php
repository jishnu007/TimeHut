<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $fillable = [
        'p_id', 'date_of_order', 'order_qty', 'total_price', 'customer_id', 'order_status', 'order_ref_no'
    ];
}
