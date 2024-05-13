<?php

namespace App\Http\Controllers;

class BaseController extends Controller
{
    public function sendResponse($result, $message = "", $status = 200)
    {
        $response = [
            'success' => true,
            'data' => $result,
        ];

        if ($message) {
            $response['message'] = $message;
        }

        return response()->json($response, $status);
    }

    public function sendError($error = "Unauthenticated!", $errorMessages = [], $status = 401)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if (!empty($errorMessages)) {
            $response['errors'] = $errorMessages;
        }

        return response()->json($response, $status);
    }
}
