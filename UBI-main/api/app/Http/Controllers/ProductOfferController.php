<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Offer;
use App\Models\ProductOffer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductOfferController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('View Product Offer')) {
            return $this->sendError();
        }

        $productOffers = ProductOffer::with(['products', 'offers'])->all();
        return $this->sendResponse($productOffers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'offer' => 'required|exists:offers,id',
            'product' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error!', $validator->errors, 422);
        }

        $validated = $validator->validated();

        $offer = Offer::find($validated->offer);

        if ($offer->valid_till < now()) {
            return $this->sendError('Offer has been expired!');
        }

        ProductOffer::create($validated);
        return $this->sendResponse('Offer is now available for this product!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $productOffer = ProductOffer::with(['products', 'offers'])->find($id);

        if (!$productOffer) {
            return $this->sendError('Invalid Product Offer Id!');
        }

        return $this->sendResponse($productOffer);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Update Product Offer')) {
            return $this->sendError();
        }

        $productOffer = ProductOffer::find($id);

        if ($productOffer) {
            return $this->sendError('Invalid Product Offer Id!');
        }

        $validator = Validator::make($request->all(), [
            'offer' => 'required|exists:offers,id',
            'product' => 'required|exists:products,id',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error!', $validator->errors, 422);
        }

        $validated = $validator->validated();

        $offer = Offer::find($validated->offer);

        if ($offer->valid_till < now()) {
            return $this->sendError('Offer has been expired!');
        }

        $productOffer->update($validated);
        return $this->sendResponse('Offer is now available for this product!');
    }

    public function destroy($id)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Delete Product Offer')) {
            return $this->sendError();
        }

        $productOffer = ProductOffer::find($id);

        if (!$productOffer) {
            return $this->sendError('Invalid Product Offer Id!');
        }

        $productOffer->delete();
        return $this->sendResponse('Record Successsfully Deleted!');
    }
}
