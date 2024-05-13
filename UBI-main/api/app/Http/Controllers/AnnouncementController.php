<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AnnouncementController extends BaseController
{
    /**
     * Display a listing of the resource.
     */

    public function all()
    {
        $user = auth()->user();

        if (!$user || $user->hasPermissionTo('View Announcements')) {
            return $this->sendError();
        }

        $announcements = Announcement::all();
        return $this->sendResponse($announcements);
    }

    public function index()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $announcements = Announcement::where('valid_till', '>', now())->get();

        return $this->sendResponse($announcements);
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

        if (!$user->hasPermissionTo('Insert Announcement')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'announcement' => 'required|string',
            'title' => 'required|string',
            'valid_till' => 'required|date|after:now',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }

        $validated = $validator->validated();

        $validated['valid_till'] = Carbon::createFromFormat('m/d/Y', $validated['valid_till'])->format('Y-m-d'); 
        Announcement::create($validated);
        return $this->sendResponse('Announcement Saved!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$announcement) {
            return $this->sendError('Invalid Announcement Id!');
        }

        return $this->sendResponse($announcement);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        if (!$user && !$user->hasPermissionTo('Update Announcement')) {
            return $this->sendError();
        }
        $announcement = Announcement::find($id);
        if (!$announcement) {
            return $this->sendError('Invalid Announcement Id!');
        }

        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            'announcement' => 'string',
            'title' => 'string',
            'valid_till' => 'date|after:now',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }

        $validated['valid_till'] = Carbon::createFromFormat('m/d/Y', $validated['valid_till'])->format('Y-m-d'); 
        $validated = $validator->validated();
        $announcement->update($validated);
        return $this->sendResponse('Announcement Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Announcement $announcement)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        if (!$user->hasPermissionTo('Delete Announcement')) {
            return $this->sendError();
        }

        if (!$announcement) {
            return $this->sendError('Invalid Announcement Id!');
        }

        $announcement->delete();
        return $this->sendResponse('Announcement Deleted Successfully Saved!');
    }
}
