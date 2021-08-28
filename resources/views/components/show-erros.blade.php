@props(['erros'])
@foreach(explode(',', $erros) as $error)
@error(trim($error))
<x-alert title="Atenção" type="error">{{$message}}</x-alert>
@enderror
@endforeach