<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_gallery extends Model
{
    public $table = "user_gallerys";
    protected $primaryKey = 'Photo_Id';
    use HasFactory;

    protected $fillable = [
        'user_id',
        'picture_name',
        'picture_description',
        'picture_link',
    ];
}
