@extends('auth.layouts.master')

@section('content')

<div class="card">
    <div class="body">
        <form id="sign_in" action="{{ route('password.email') }}" method="POST">
            @csrf
            <div class="msg">Resetar Senha</div>
            @if($errors->any())
            <x-alert title="Atenção" type="error">
                @foreach ($errors->all() as $error)
                <p>{{ $error }}</p>
                @endforeach
            </x-alert>
            @endif
            <div class="input-group">
                <span class="input-group-addon">
                    <i class="material-icons">email</i>
                </span>
                <div class="form-line">
                    <input type="email" class="form-control" name="email" placeholder="E-mail"
                        value="{{ old('email') }}" required autocomplete="email" autofocus>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Enviar link para alteração de senha</button>
        </form>
    </div>
</div>

@endsection
