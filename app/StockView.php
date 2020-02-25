<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockView extends Model
{
    protected $table ='stocks';

    protected $fillable = [
        'p_id', 'p_name', 'password', 'price', 'warehouse',
    ];
}
