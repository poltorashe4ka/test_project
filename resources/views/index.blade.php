<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Test project</title>
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<input type="hidden" id="background" value="{{$background}}">
<input type="hidden" id="depth" value="{{$depth}}">
<input type="hidden" id="list" value="{{$list}}">
<div id="navcontainer"></div>
</body>
<script src="{{mix('/js/app.js')}}"></script>
</html>
