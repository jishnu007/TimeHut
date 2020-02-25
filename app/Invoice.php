<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Invoice extends Model
{
    protected $table = 'invoices';

    protected $fillable = [
        'i_no', 'p_name', 'order_qty','p_price','amount'
    ];


}
