<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('View User')) {
            return $this->sendError();
        }
        $users = User::withTrashed()->with('roles')->get();

        return $this->sendResponse($users);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'username' => 'string|unique:users,username',
            'bio' => 'string|nullable',
            'role' => ['required', 'exists:roles,name', 'not_in:Executive'], // Adding the 'not_in' rule
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }

        $validated = $validator->validated();
        $user = User::create($validated);
        $role = Role::where('name', $request->role)->first();
        $user->assignRole($role);
        return $this->sendResponse('User Successfully Created!');
    }

    public function me()
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $me = User::with(['roles.permissions'])->find($user->id);
        $me['role'] = $me->roles[0]->name;
        $me['permissions'] = $me->roles[0]->permissions;
        unset($me->roles);
        return $this->sendResponse($me);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('Create User')) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'username' => 'string|unique:users,username,',
            'avtar' => 'string',
            'bio' => 'string|nullable',
            'role' => 'required|exists:roles,name',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error', $validator->errors(), 422);
        }

        $validated = $validator->validated();
        $user = User::create($validated);
        $user->assignRole($request->role);
        return $this->sendResponse('User Successfully Created!');
    }

    public function myUpdatePassword(Request $request)
    {
        $user = auth()->user();
        if (!$user) {
            return $this->sendError();
        }

        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string|min:8',
            'new_password' => 'required|min:8|different:current_password',
            'new_password_confirmation' => 'required|same:new_password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation error', $validator->errors(), 422);
        }

        if (!Hash::check($request->current_password, $user->password)) {
            return $this->sendError('Current password is incorrect', [], 422);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

// Return success response
        return $this->sendResponse('Password updated successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = auth()->user();

        if (!$user || !$user->hasPermissionTo('View User')) {
            return $this->sendError();
        }

        $targetUser = User::withTrashed()->with(['roles'])->find($id);

        if (!$targetUser) {
            return $this->sendErro('Invalid User Id', 'error', 422);
        }
        $targetUser['role'] = $targetUser->roles[0]->name;
        unset($targetUser->roles);

        if (!$targetUser) {
            return $this->sendError("User not found!");
        }

        return $this->sendResponse($targetUser);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = auth()->user();

        if (!$user) {
            return $this->sendError();
        }

        $targetUser = User::withTrashed()->with('roles')->find($id);

        if (!$targetUser) {
            return $this->sendError('Invalid User ID', 'Invalid', 422);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'email' => 'string',
            'username' => 'string|unique:users,username,' . $targetUser->id,
            'avtar' => 'string',
            'bio' => 'string|nullable',
            'role' => 'required|exists:roles,name',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error!', $validator->errors(), 422);
        }

        $validated = $validator->validated();

        if ($user->id != $targetUser->id) {
            $targetUser->removeRole($targetUser->roles[0]->name);
            $targetUser->assignRole($request->role);
        }
        $targetUser->update($validated);

        return $this->sendResponse('Successfuly Updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id = null)
    {
        $user = auth()->user();

        if (!$user || ($id && !$user->hasPermissionTo('Delete User'))) {
            return $this->sendError();
        }

        $targetUser = User::withTrashed()->find($id);

        if (!$targetUser) {
            return $this->sendError('Invalid User ID');
        }

        if ($targetUser->id == $user->id) {
            return $this->sendError("You can't deactivate own account!", 404);
        }

        if ($targetUser->deleted_at) {
            $targetUser->restore();
        } else {
            $targetUser->delete();
        }

        return $this->sendResponse('Operation Successfull!');

        $user = $id ? User::find($id) : auth()->user();
    }
}
