<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OfferController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offers = Offer::with('product')->where('valid_till', '<', now())->get();
        return $this->sendResponse($offers);
    }

    public function all()
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('View Offer')) {
            return $this->sendError();
        }

        $offers = Offer::with('products')->paginate(100);
        return $this->sendResponse($offers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('Insert Offer')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'descritpion' => 'required|string',
            'discount' => 'required|decimal|min:0.01',
            'valid_till' => 'required|date:after,now()',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error!', $validator->errors(), 422);
        }

        $validated = $validator->validated();
        $offer = Offer::create($validated);
        return $this->sendResponse("Offer {$offer->id} Successfully Created!");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $offer = Offer::with('products')->find($id);

        if (!$offer) {
            return $this->sendError('Invalid Offer Id!', 404);
        }
        return $this->sendResponse($offer);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('Update Offer')) {
            return $this->sendError();
        }

        $offer = Offer::find($id);

        if(!$offer){
            return $this->sendError('Invalid Offer Id');
        }

        $validator = Validator::make($request->all(),[
            'name' => 'string',
            'descritpion' => 'string',
            'discount' => 'decimal|min:0.01',
            'valid_till' => 'date:after,now()',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error',$validator->errors(),422);
        }
        $validated = $validator->validated();
        $offer->update($validated);
        return $this->sendResponse("Offer Successfully Updated!");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = auth()->user();

        if(!$user || !$user->hasPermissionTo('Delete Offer')){
            return $this->sendError();
        }

        $offer = Offer::find($id);

        if(!$offer){
            return $this->sendError("Invalid Offer Id!");
        }

        $offer->delete();
        return $this-->sendResponse('Offer Deleted Sucessfully!');
    }
}
