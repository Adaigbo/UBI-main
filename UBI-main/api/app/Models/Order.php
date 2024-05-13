<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory, softDeletes;

    protected $fillable = [
        'product', 'user', 'fulfiled', 'amount', 'price',
    ];

    public function products()
    {
        return $this->belongsTo(Product::class, 'product');
    }

    // Many-to-one relationship with the User model
    public function users()
    {
        return $this->belongsTo(User::class);
    }

}
