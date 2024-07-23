<?php

namespace App\Console;

use App\Jobs\MyJob;
use App\Person;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $count = Person::all()->count();
        $id = rand(0, $count) + 1;
        $schedule->job(new MyJob($id));

        // $schedule->call(new MyJob($id));

        // $schedule->call(function() use ($id)
        // {
        //     MyJob::dispatch($id);
        // });
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
