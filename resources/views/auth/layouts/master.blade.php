<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>{{config('app.name')}}</title>

    <!-- Google Fonts -->
    <link href="{{asset('fonts/googlefonts.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('fonts/icon.css')}}" rel="stylesheet" type="text/css">

    <!-- Template Css -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <link rel="stylesheet" href="{{ asset('plugins/node-waves/waves.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/animate-css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/sweetalert/sweetalert.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/bootstrap-select/css/bootstrap-select.css') }}">

    {!! Recaptcha::renderJs() !!}

    <!-- Styles extras -->
    @stack('css')

</head>

<body class="login-page">
    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);"><b>{{config('app.name')}}</b></a>
        </div>
        @yield('content')
    </div>

    <!-- Custom Js -->
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{ asset('plugins/node-waves/waves.min.js') }}"></script>
    <script src="{{ asset('plugins/sweetalert/sweetalert.min.js') }}"></script>
    <script src="{{ asset('plugins/jquery-inputmask/jquery.inputmask.bundle.js') }}"></script>
    <script src="{{ asset('plugins/bootstrap-select/js/bootstrap-select.js') }}"></script>

    <script src="{{ asset('js/script.js?v=1') }}"></script>

    <!-- Scripts extras -->
    @stack('js')


</body>

</html>
