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
composer require larave/ui
```
Instale as dependências do pt-br-validator
```bash 
composer require laravellegends/pt-br-validator
```
Instale as dependências do laravel-make-service
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
Copie as keys abaixo para o arquivo .env
```bash
RECAPTCHA_SITE_KEY="6LeZiSkcAAAAAFiKMB7mBGMj3MD_3U15M0UEmH8g"
RECAPTCHA_SECRET_KEY="6LeZiSkcAAAAABqfx4Ifq93f3f25qjsm3sg0hw0B"
```
Instale as dependências do <a href="https://github.com/spatie/laravel-cookie-consent">laravel-cookie-consent</a>
```bash 
composer require spatie/laravel-cookie-consent
```
E finalmente instale as dependências do template
```bash 
composer require matheus108/laravel-template-materialize
```
```bash 
php artisan vendor:publish --tag=laravel-template-materialize
```

---
