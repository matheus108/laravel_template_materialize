@extends('auth.layouts.master')

@section('content')

<div class="card">
    <div class="body">
        <form id="sign_in" action="{{ route('login') }}" method="POST">
            @csrf
            {!! Recaptcha::field('login') !!}

            <div class="msg">Faça login para iniciar sua sessão</div>
            <x-alerts></x-alerts>
            <div class="input-group">
                <span class="input-group-addon">
                    <i class="material-icons">person</i>
                </span>
                <div class="form-line">
                    <input type="email" class="form-control" name="email" placeholder="Usuário"
                        value="{{ old('email') }}" required autocomplete="email" autofocus>
                </div>
            </div>
            <div class="input-group">
                <span class="input-group-addon">
                    <i class="material-icons">lock</i>
                </span>
                <div class="form-line">
                    <input type="password" class="form-control" name="password" placeholder="Senha" required
                        autocomplete="current-password">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-8 p-t-5">
                    <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-green"
                        {{ old('remember') ? 'checked' : '' }}>
                    <label for="rememberme">Ficar conectado</label>
                </div>
                <div class="col-xs-4">
                    <button class="btn btn-success waves-effect" type="submit">LOGAR</button>
                </div>
            </div>
        </form>
    </div>
</div>

@endsection
