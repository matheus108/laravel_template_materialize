## 💻 Sobre o projeto

Template materialize para laravel.

---

## Instalando a aplicação

Inicie um novo projeto laravel
```bash
curl -s https://laravel.build/example-app | bash 
```
Navegue até a raiz do projeto
```bash
cd example-app
```
Instale as dependências do laravel/ui
```bash 
composer require laravel/ui
```
Instale as dependências do <a href="https://github.com/LaravelLegends/pt-br-validator">pt-br-validator</a>  (Opcional)
```bash 
composer require laravellegends/pt-br-validator
```
Instale as dependências do laravel-make-service (Opcional)
```bash 
composer require getsolaris/laravel-make-service
```
Instale as dependências do <a href="https://github.com/mostafaznv/recaptcha">recaptcha</a> e configure
```bash 
composer require mostafaznv/recaptcha
```
```bash 
php artisan vendor:publish --provider="Mostafaznv\Recaptcha\RecaptchaServiceProvider"
```
Instale as dependências do <a href="https://github.com/spatie/laravel-cookie-consent">laravel-cookie-consent</a> (Opcional)
```bash 
composer require spatie/laravel-cookie-consent
```
E finalmente instale as dependências do template
```bash 
composer require matheus108/laravel_template_materialize
```
```bash 
php artisan vendor:publish --tag=laravel-template-materialize
```

---
