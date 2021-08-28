@props(['link','title','progress', 'color'])
<li>
    <a href="javascript:void(0);">
        <h4>
            {{$title}}
            <small>{{$progress}}%</small>
        </h4>
        <div class="progress">
            <div class="progress-bar {{$color ?? 'bg-blue'}}" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                aria-valuemax="100" style="width: <?=$progress . '%'?>">
            </div>
        </div>
    </a>
</li>