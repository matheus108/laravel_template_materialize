<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        @auth
        <!-- User Info -->
        @include('admin.layouts.inc.user-info')
        @endif
        <!-- Menu -->
        @yield('menu-principal')
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <b>
                &copy;{{date('Y') > 2021 ? 2021 . ' - ' . date('Y') : 2021}} {{ config('app.name') }}
            </b>
            <br>
            <b>Version: </b> @include('version') <br>
            <b>Developed by: </b> <a href="mailto:matheusoliveira@hotmail.com.br">Matheus Oliveira</a>
        </div>
        <!-- #Footer -->
    </aside>
    {{-- Menu Config --}}
    @yield('menu-config')
</section>
