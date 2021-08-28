@props(['color', 'icon', 'title', 'value', 'type', 'lg'=>3, 'md'=>3, 'sm'=>6, 'xs'=>12, 'href'=>null])

<div class="col-lg-{{$lg}} col-md-{{$md}} col-sm-{{$sm}} col-xs-{{$xs}}" @isset($href)
    onclick="location.href='{{ $href }}'" @endif>
    <div class="{{$type ?? 'info-box'}} {{ $color }} hover-zoom-effect">
        @isset($icon)
        <div class="icon">
            <i class="material-icons">{{$icon}}</i>
        </div>
        @endif
        <div class="content">
            <div class="text">{{$title}}</div>
            <div class="number">{{$slot ?? 0}}</div>
        </div>
    </div>
</div>
