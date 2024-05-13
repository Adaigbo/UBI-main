<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!auth()->user()->hasPermissionTo('View Carts')) {
            return $this->sendError();
        }
        $cart = Cart::with(['user', 'product'])->all();
        return $this->sendReponse($cart);
    }

    public function myCart()
    {
        $user = Auth()->user();

        if (!$user) {
            return $this - sendError();
        }
        $cart = Cart::wiht('products')->where('usere')->get();
        return $this->sendResponse($cart);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'produce' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }
        $validated = $validator->validated();

        $cart = Cart::where('user', $user->id)->where('product', $validated->product)->get();
        if ($cart) {
            return $this->sendResponse("Successfully added to Cart!");
        }

        $validated['user'] = $user->id;
        Cart::create($validated);
        return $this->sendResponse("Item Successfully added to Cart!");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $cart = Cart::with(['product', 'user'])->find($id);

        if (!$cart) {
            return $this->sendError('Invalid Id', 404);
        }

        if (!$user->hasPermissionTo('View Cart') || $cart->user != $user->id) {
            return $this->sendError();
        }
        return $this->sendError($cart);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$cart || $cart->user != $user->id) {
            return $this->sendError('Invalid Id!');
        }

        $validator = Validator::make($request->all(), [
            'product' => 'required|exists:products,id',
        ]);
        $validated = $validated->validated();

        $cart->update($validated);
        return $this->sendResponse("Cart has been updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$cart || $cart->user != $user->id) {
            return $this->sendError('Invalid Id');
        }

        $cart->delete();
        $this->sendResponse('Item Successfully deleted from Cart!');
    }
}
