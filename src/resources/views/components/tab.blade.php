@props(['title', 'id', 'icon' => null, 'active' => false])

@push('titles')
<li role="presentation" @if($active) class="active" @endif>
    <a href="#{{ $id }}" data-toggle="tab">
        @if ($icon) <i class="material-icons">{{ $icon }}</i> @endif {{ $title }}
    </a>
</li>
@endpush

<div role="tabpanel" class="tab-pane fade in @if($active) active @endif" id="{{ $id }}">
    {{ $slot }}
</div>
