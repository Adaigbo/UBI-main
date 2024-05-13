<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOffer extends Model
{
    use HasFactory;

    protected $fillable = [
        'product', 'offer',
    ];

    public function products()
    {
        return $this->belongsTo(Product::class, 'product');
    }

    // Many-to-one relationship with the Offer model
    public function offers()
    {
        return $this->belongsTo(Offer::class, 'offer');
    }
}
