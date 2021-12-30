<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        $background = ''; $depth=''; $list='';

        if($request['background'])
            $background = $request['background'];

        if($request['depth'])
            $depth = $request['depth'];

        if($request['list'])
            $list = $request['list'];

        return view('index',[
            'background'=>$background,
            'depth'=>$depth,
            'list'=>$list
        ]);
    }
}
