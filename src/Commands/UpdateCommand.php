<?php

namespace matheus108\laravel_template_materialize\Commands;

use Illuminate\Console\Command;

class UpdateCommand extends Command
{
    protected $signature = 'update';

    protected $description = 'Atualização sistema';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        if ($this->confirm('Deseja atualizar versão?', 'yes')) {
            $version = file_get_contents(resource_path('views/version.blade.php'));
            $version = $this->increment_version(trim($version));
            file_put_contents(resource_path('views/version.blade.php'), $version);
        }
        exec("git add .");
        $msg = $this->ask("Menssagem", "udpate");
        exec("git commit -a -m '$msg'");
        exec("git push");
    }

    private function increment_version($version)
    {
        $parts = explode('.', $version);

        if ($parts[2] + 1 < 99) {
            $parts[2]++;
        } else {
            $parts[2] = 0;
            if ($parts[1] + 1 < 99) {
                $parts[1]++;
            } else {
                $parts[1] = 0;
                $parts[0]++;
            }
        }

        return implode('.', $parts);
    }
}
