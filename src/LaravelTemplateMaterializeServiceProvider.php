<?php

namespace matheus108\laravel_template_materialize;

use Illuminate\Support\ServiceProvider;
use matheus108\laravel_template_materialize\Commands\UpdateCommand;

class LaravelTemplateMaterializeServiceProvider extends ServiceProvider
{
    public function register()
    {
    }

    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([UpdateCommand::class]);
        }
        $this->publishes([
            __DIR__ . '/../resources/lang' => resource_path('lang'),
            __DIR__ . '/../resources/views' => resource_path('views'),
            __DIR__ . '/../public' => public_path()
        ], 'laravel-template-materialize');
    }
}