@props(['icon', 'href', 'type'=>'primary'])
<a href="{{ $href }}" class="btn btn-{{ $type }} btn-xs">
    <i class="material-icons">{{ $icon }}</i>
    <span>{{ $slot }}</span>
</a>
