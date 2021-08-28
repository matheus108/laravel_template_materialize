@props(['route','title','icon'])
<li class="{{!isset($route) ? 'active':''}}">
    @isset($route)
    <a href='{{$route}}'>@if(isset($icon)) <i class="material-icons">{{ $icon }}</i> @endif{{$title}}</a>
    @else
    @if(isset($icon)) <i class="material-icons">{{ $icon }}</i> @endif{{$title}}
    @endif
</li>
