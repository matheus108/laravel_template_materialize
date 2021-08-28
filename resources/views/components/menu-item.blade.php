@props(['href'=>null, 'value'=>null,'icon'=>null,'title'])
<li {{$attributes->merge(['class'=>(url()->current() === $href ? 'active' : '')])}}>
    <a href="{{( empty($submenu) ? $href : 'javascript:void(0);' )}}"
        class="{{( !empty($submenu) ? 'menu-toggle' : '' )}}">
        @isset($icon)
        <i class="material-icons">{{$icon}}</i>
        @endif
        <span>{{$title}}</span>
    </a>
    @isset($submenu)
    <ul class="ml-menu">
        {{$submenu}}
    </ul>
    @endif
</li>
