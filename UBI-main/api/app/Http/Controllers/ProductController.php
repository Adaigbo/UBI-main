<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::where('stock', '>', 0)->get();
        return $this->sendResponse($products);
    }

    public function total()
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('View Products')) {
            return $this->sendError();
        }

        $products = Product::all();
        return $this->sendResponse($products);
    }

    public function all()
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('View Products')) {
            return $this->sendError();
        }

        $products = Product::withTrashed()->paginate(100);
        return $this->sendResponse();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Create Products')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'stock' => 'integer|min:1',
            'price' => 'required|min:0.01',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors(), 422);
        }

        $validated = $validator->validated();
        Product::create($validated);
        return $this->sendResponse('Product Successfully Created!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return $this->sendError('Invalid Product Id!');
        }

        return $this->sendResponse($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('Update Products')) {
            return $this->sendError();
        }

        $product = Product::find($id);

        if (!$product) {
            return $this->sendError('Invalid Product Id!');
        }

        $validator = Validtor::make($request->all(), [
            'name' => 'string',
            'stock' => 'min:1',
            'price' => 'integer|min:0.01',
            'description' => 'string',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validtion Error', $validator->errors(), 422);
        }

        $validated = $validator->validated();

        $product->update($validated);
        return $this->sendResponse('Product udpated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('Delete Products')) {
            return $this->sendError();
        }

        $product = Product::find($id);

        if (!$product) {
            return $this->sendError('Invalid Product Id!');
        }

        $product->delete();

        return $this->sendResponse('Deleted Successfully');
    }
}
