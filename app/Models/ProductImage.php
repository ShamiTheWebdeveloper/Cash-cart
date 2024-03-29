<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'image', 'product_id', 'admin_id'
    ];

    protected $hidden = [
        'admin_id'
    ];

    public function attributes()
    {
        return $this->hasMany(ProductImageAttribute::class, 'product_image_id', 'id');
    }

}
