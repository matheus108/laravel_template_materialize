@props(['title', 'type'])
@switch($type)
@case('success')
<div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    @isset($title)
    <h5>
        <i class="icon fas fa-check"></i>
        {{ $title }}
    </h5>
    @endisset
    {{ $slot }}
</div>
@break
@case('error')
<div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    @isset($title)
    <h5>
        <i class="icon fas fa-ban"></i>
        {{ $title }}
    </h5>
    @endisset
    {{ $slot }}
</div>
@break
@case('info')
<div class="alert alert-info alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    @isset($title)
    <h5>
        <i class="icon fas fa-info"></i>
        {{ $title }}
    </h5>
    @endisset
    {{ $slot }}
</div>
@break
@default
<div class="alert alert-warning alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    @isset($title)
    <h5>
        <i class="icon fas fa-exclamtion-triangle"></i>
        {{ $title }}
    </h5>
    @endisset
    {{ $slot }}
</div>
@endswitch
