@props(['count'])
<li class="dropdown">
    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
        <i class="material-icons">flag</i>
        <span class="label-count">{{$count ?? 0}}</span>
    </a>
    <ul class="dropdown-menu">
        <li class="header">TAREFAS</li>
        <li class="body">
            <ul class="menu tasks">
                {{$slot}}
            </ul>
        </li>
    </ul>
</li>