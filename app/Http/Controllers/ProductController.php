<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function list()
    {
        $products = Product::all();

        return response()->json([
            'products' => $products
        ],  200);
    }

    public function create(Request $request, Product $product)
    {
        
        
        Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'image' => $product->formImage($request->image),
                'type' => $request->type,
                'quantity' => $request->quantity,
                'price' => $request->price
        ]);
    }

    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json([
            'product' => $product
        ], 200);
    }

}
