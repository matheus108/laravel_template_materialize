<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            @hasSection ('menu-principal')
            <a href="javascript:void(0);" class="bars"></a>
            @endif
            <a class="navbar-brand" href="{{route('home')}}">{{config('app.name')}}</a>
            <ul class="nav navbar-nav navbar-right">
                {{-- Notificações --}}
                @yield('notifications')
                {{-- Tarefas --}}
                @yield('tasks')
                @stack('menu-top')
                @hasSection('menu-config')
                {{-- Menu de Configurações --}}
                <li>
                    <a href="javascript:void(0);" class="js-right-sidebar" data-close="true">
                        <i class="material-icons">settings</i>
                    </a>
                </li>
                @endif
                @if (Route::has('profile'))
                <li>
                    <a href="{{ route('profile') }}" class="material-icons">person</a>
                </li>
                @endif
                @if(Route::has('logout'))
                <li>
                    <a href="javascript:document.getElementById('logout-form').submit();">
                        <i class="material-icons">power_settings_new</i></a>
                </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
