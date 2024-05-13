<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FileController extends BaseController
{
    public function upload(Request $request)
    {
        $folders = [
            'products' => 'jpg,jpeg,png,gif',
        ];

        $validator = Validator::make($request->all(), [
            'attachment' => 'required|mimes:' . $folders[$request->input('folder')] . '|max:10240', // 10MB
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Errors', $validator->errors(), 422);
        }

        $validatedData = $validator->validated();

        if ($request->hasFile('attachment')) {
            $file = $request->file('attachment');
            $fileName = time() . '_' . rand(1, 9999999) . '_' . $file->getClientOriginalName();

            // Update the folder name based on the request data
            $folder = $request->input('folder');
            $filePath = public_path($folder); // Get the absolute path to the directory

            // Example of storing the file
            $filePath = $file->storeAs($folder, $fileName, 'public'); // File will be stored in the 'public' directory.

            $fileData = [
                'file' => $fileName,
                'fileName' => $file->getClientOriginalName(),
                'filePath' => $filePath,
                'folder' => $folder,
            ];

            return $this->sendResponse($fileData, "File uploaded successfully!");
        }
        return $this->sendError('Attachment missing');
    }

}
