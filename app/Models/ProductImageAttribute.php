<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImageAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_image_id', 'attribute_value_id'
    ];

    protected $hidden = [
        'admin_id'
    ];


    public function value()
    {
        return $this->hasOne(AttributeValue::class, 'id', 'attribute_value_id');
    }

}
