@props(['title', 'class', 'color', 'id'])

<div class="card {{$class ?? ''}}" id="{{ $id ?? '' }}">
    <div class="header {{$color ?? ''}}">
        <h2>{{$title}}</h2>
        @isset($menu)
        <ul class="header-dropdown m-r-0">
            @stack('btn-search')
            {{ $menu }}
        </ul>
        @endif
    </div>
    <div class="body">
        {{ $slot }}
    </div>
</div>
