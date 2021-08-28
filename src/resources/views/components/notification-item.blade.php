@props(['icon', 'link', 'time'])
<li>
    <a href="{{$link??'javascript:void(0);'}}">
        @isset($icon)
        <div class="icon-circle bg-light-green">
            <i class="material-icons">{{$icon}}</i>
        </div>
        @endisset
        <div class="menu-info">
            <h4>{{$slot}}</h4>
            @isset($time)
            <p>
                <i class="material-icons">access_time</i> {{$time}}
            </p>
            @endisset
        </div>
    </a>
</li>
