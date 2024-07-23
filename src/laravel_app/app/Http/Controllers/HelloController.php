<?php

namespace App\Http\Controllers;

use App\Events\personEvent;
use App\person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Output\BufferedOutput;

class HelloController extends Controller
{
    public function index($id = -1)
    {
        $opt = [
            '--method'=>'get',
            '--path'=>'hello',
            '--sort'=>'uri',
            '--compact'=>null,
        ];
        $output = new BufferedOutput;
        Artisan::call('route:list', $opt, $output);
        $msg = $output->fetch();

        $data = [
            'msg' => $msg,
        ];
        return view('hello.index', $data);
    }

    public function send(Request $request)
    {
        $id = $request->input('id');
        $person = person::find($id);

        event(new personEvent($person));
        $data =[
            'input' => '',
            'msg' => 'id=' . $id,
            'data' => [$person],
        ];
        return view('hello.index', $data);
    }

    public function save($id, $name)
    {
        $record = person::find($id);
        $record->name = $name;
        $record->save();
        return redirect()->route('hello', $record);
    }

    public function other()
    {
        $person = new person();
        $person->all_data = ['aaa', 'bbb@ccc', 1234];
        $person->save();
        return redirect()->route('hello', $person);
    }

    public function json($id = -1)
    {
        if($id == -1)
        {
            return person::get()->toJson();
        }
        else
        {
            return person::find($id)->toJson();
        }
    }

    public function clear()
    {
        Artisan::call('cache:clear');
        Artisan::call('event:clear');
        return redirect()->route('hello');
    }
}
