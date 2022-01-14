<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\user_information;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class UserInfoController extends Controller
{
    //
    public function updateInfo(Request $request){
        // $user= User::findOrFail($id);
        try {
            $user_id = $request -> input('user_id');
            $user_information = user_information::findOrFail($user_id);

            if($user_information){
                $user_information -> description = $request-> input('description');
                $user_information -> cloudinary_link = $request-> input('cloudinary_link');
                $user_information -> save();
            }

        }catch (ModelNotFoundException $e){
            return user_information::create([
                'id' => $request-> input('id'),
                'description' => $request-> input('description'),
                'cloudinary_link' => $request-> input('cloudinary_link'),
            ]);
        }
    }

    public function showAll(){
        return user_information::all();
    }

    public function show($user_id){
        return user_information::findOrFail($user_id);
    }
}
