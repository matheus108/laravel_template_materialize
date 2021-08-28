@props(['modal', 'icon','type'=>'primary'])
<button class="btn btn-{{ $type }} btn-xs" data-toggle="modal" data-target="{{ $modal }}">
    <i class="material-icons">{{ $icon }}</i>
    <span>{{ $slot }}</span>
</button>
