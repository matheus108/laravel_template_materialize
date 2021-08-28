<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>{{ config('app.name') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.png') }}">

    <!-- Google Fonts -->
    <link href="{{asset('fonts/googlefonts.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('fonts/icon.css')}}" rel="stylesheet" type="text/css">

    <!-- Template Css -->
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <link rel="stylesheet" href="{{ asset('plugins/node-waves/waves.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/animate-css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/sweetalert/sweetalert.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/bootstrap-select/css/bootstrap-select.css') }}">

    <!-- Styles extras -->
    @stack('css')

</head>

<body class="theme-default">
    <x-spinner />
    @stack('search-bar')
    <!-- Top Bar -->
    @include('admin.layouts.inc.top-bar')
    <!-- #Top Bar -->
    <!-- Sidebars -->
    <x-menu>
        <x-menu-group title='MENU PRINCIPAL'>
            <x-menu-item title="Home" icon="group" href="{{ route('home') }}" />
        </x-menu-group>
    </x-menu>

    @include('admin.layouts.inc.sidebars')
    <!-- #Sidebars -->

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>

    <section class="content" @hasSection('menu-principal') style="" @else style="margin-left: 10px" @endif>
        @yield('content')
    </section>

    <!-- Custom Js -->
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{ asset('plugins/node-waves/waves.min.js') }}"></script>
    <script src="{{ asset('plugins/sweetalert/sweetalert.min.js') }}"></script>
    <script src="{{ asset('plugins/jquery-inputmask/jquery.inputmask.bundle.js') }}"></script>
    <script src="{{ asset('plugins/bootstrap-select/js/bootstrap-select.js') }}"></script>
    <script src="{{ asset('plugins/jquery-slimscroll/jquery.slimscroll.js') }}"></script>

    <script src="{{ asset('js/script.js?v=1') }}"></script>

    <!-- Scripts extras -->
    @stack('js')


</body>

</html>
