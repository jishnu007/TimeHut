<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table='th_customer';
    protected $fillable = ['c_name', 'c_email' ,'password' , 'c_address','c_phone'];

}
