<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$user->hasPermissionTo('View Order')) {
            return $this->sendError();
        }

        $orders = Order::with(['users', 'products'])->get();

        return $this->sendResponse($orders);
    }

    public function fulfil($id)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Fulfil Order')) {
            return $this->sendError();
        }
        $order = Order::find($id);

        if (!$order) {
            return $this->sendError('Invalid Order ID!');
        }

        if ($order->fulfil) {
            return $this->sendError('Order is already fulfiled!');
        }

        $order->update(['fulfiled' => now()]);

        return $this->sendResponse('Successfully Fulfilled!');
    }

    public function myOrders()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $orders = Order::with('products')->where('user', $user->id)->get();
        return $this->sendResponse($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Insert Order')) {
            return $this->sendError();
        }

        \Illuminate\Support\Facades\Log::info($request->all());
        $validator = Validator::make($request->all(), [
            'price' => 'required|integer|min:1',
            'amount' => 'required|integer|min:1',
            'offer' => 'exists:offers,id',
            'product' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors(), 422);
        }

        $validatedData = $validator->validated();
        $validatedData['user'] = $user->id;

        if ($request->offer) {
            $offer = Offer::find($request->offer);
            $productoffers = ProductOffer::where('offer', $offer->id)->get();

            $status = false;

            foreach ($productoffers as $productoffer) {
                if ($productoffer->product == $validatedData->product) {
                    $status = true;
                }
            }

            if (!$status) {
                return $this->sendError('This offer is not valid for this product!');
            }

            if ($offer->valid_till < now()) {
                return $this->sendError('Offer has been expired!');
            }
        }

        $product = Product::find($request->product);

        if ($product->stock < $request['amount']) {
            return $this->sendError('Not Enough Stock');
        }

        $product->stock = $product->stock - $request['amount'];

        $order = Order::create($validatedData);
        return $this->sendResponse("Order with id #{$order->id} Successfully placed!");
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

        $order = Order::with(['products', 'users'])->find($id);

        if (!$order) {
            return $this->sendError('Invalid Order Id!');
        }

        if (!$user->hasPermissionTo('View Order') || ($user->id != $order->user)) {
            return $this->sendError();
        }

        return $this->sendResponse($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $order = Order::find($id);

        if (!$order || ($order->user != $user->id)) {
            return $this->sendError('Invalid Order Id!');
        }

        $validator = Validator::make($request->all(), [
            // 'price' => 'integer|min:0.01',
            'amount' => 'integer|min:1',
            'product' => 'exists:products,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error", $validator->errors(), 422);
        }

        $validatedData = $validator->validated();

        if ($validatedData->offer) {
            $offer = Offer::find($validatedData->offer);
            $productoffers = ProductOffer::where('offer', $offer->id)->get();

            $status = false;

            foreach ($productoffers as $productoffer) {
                if ($productoffer->product == $validatedData->product) {
                    $status = true;
                }
            }

            if (!$status) {
                return $this->sendError('This offer is not valid for this product!');
            }

            if ($offer->valid_till < now()) {
                return $this->sendError('Offer has been expired!');
            }
        }
        $order->update($validatedData);

        return $this->sendResponse("Order {$order->id} successfully updated!");
    }

    public function orderStatus($id)
    {
        if (!auth()->user()->hasPermissionTo('Update Order Status')) {
            return $this->sendError();
        }

        $order = Order::find($id);
        if (!$order) {
            return $this->sendError('Invalid Order Id');
        }

        $order->update(['fulfiled' => Carbon::now()]);
        return $this->sendResponse("Order Status Succcessfully Updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('Delete Order')) {
            return $this->sendError();
        }

        $order = Order::find($id);

        if (!$order) {
            return $this->sendError('Invalid Order Id!');
        }
        if ($order->fulfiled) {
            return $this->sendError("Order fulfiled can't remove");
        }

        $order->delete();

        return $this->sendResponse("Order {$order->id} Succesfully Canceled!");
    }
}
