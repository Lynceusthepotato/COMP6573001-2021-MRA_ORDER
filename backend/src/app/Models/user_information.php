<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_information extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'cloudinary_link',
    ];
}
