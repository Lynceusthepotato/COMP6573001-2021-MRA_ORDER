<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user_gallery;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class UserGalleryController extends Controller
{
    //

    public function galleryInfo(Request $request){
        try {
            $user_id = $request -> input('user_id');
            $user_gallery = user_gallery::findOrFail($user_id);
            $Photo_Id = $request-> input('Photo_Id');
            $check_userPhoto = user_gallery::findOrFail($Photo_Id);
            if($user_gallery && $check_userPhoto)
                $user_gallery -> picture_name = $request-> input('picture_name');
                $user_gallery -> picture_description = $request-> input('picture_description');
                $user_gallery -> picture_link = $request-> input('picture_link');

                $user_gallery -> save();
        } catch (ModelNotFoundException $e){
            return user_gallery::create([
                'user_id' => $request-> input('user_id'),
                'picture_name' => $request-> input('picture_name'),
                'picture_description' => $request-> input('picture_description'),
                'picture_link' => $request-> input('picture_link'),
            ]);
        }
    }

    public function showAll(){
        return user_gallery::all();
    }

    public function show($user_id){
        return user_gallery::where('user_id', $user_id)->get();
    }

    public function showEdit($user_id, $Photo_Id){
        return user_gallery::where('user_id', $user_id)->where("Photo_Id", $Photo_Id)->get();
    }
}
