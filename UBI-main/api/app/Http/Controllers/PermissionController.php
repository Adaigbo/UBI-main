<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends BaseController
{
    public function index()
    {
        $permissions = Permission::all();
        return $this->sendResponse($permissions);
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        if (!$user || !$user->roles[0]->name == 'Executive') {
            return $this->sendError();
        }

        $validtor = Validator::make($request->all(), [
            'role' => 'required|exists:roles,name',
            'permission' => 'required|exists:permissions,name',
        ]);

        if ($validtor->fails()) {
            return $this->sendError('Validation Error', $validtor->errors(), 422);
        }
        $validted = $validtor->validated();

        $role = Role::findByName($request->role);
        if ($role->name != 'Executive') {
            if ($role->hasPermissionTo($request->permission)) {
                $role->revokePermissionTo($request->permission);
            } else {
                $role->givePermissionTo($request->permission);
            }
        } else {
            return $this->sendResponse('Validation Error', "Executive permissions can't be changed", 422);
        }
        return $this->sendResponse('Sucessfully Updated');
    }

}
