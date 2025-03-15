<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create {email} {--password=} {--name=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');
        $name = $this->option('name') ?? 'New user';
        $password = $this->option('password') ?? Str::random(12);

        if (User::where('email', $email)->exists()) {
            $this->error('A user with this email already exists.');
            return;
        }

        User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password)
        ]);

        $this->info('User created successfully!');
        $this->info("Email: $email");
        $this->info("Password: $password");
    }
}
