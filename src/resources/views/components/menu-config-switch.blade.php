@props(['title'])
<li>
    <span>{{$title}}</span>
    <div class="switch">
        <label><input type="checkbox" {{ $attributes }}><span class="lever"></span></label>
    </div>
</li>