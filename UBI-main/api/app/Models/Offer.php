<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Offer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'discount',
        'valid_till',
        'description',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_offers', 'offer', 'product');
    }
}
