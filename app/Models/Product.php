<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\Facades\Image;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'image', 'type', 'quantity', 'price'];

    public function formImage($image)
    {
        $strpos = strpos($image, ';');
        $sub = substr($image, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = time(). '.' .$ex;
        $img = Image::make($image)->resize(117, 100);
        $uploadPath = public_path(). '/upload/';
        $img->save($uploadPath.$name);
        return $name;
    }
}
