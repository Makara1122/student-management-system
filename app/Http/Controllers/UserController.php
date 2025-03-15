<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;

class UserController extends Controller
{
    public function show(User $user)
    {
        return Inertia::render('about', [
            'user' => $user
        ]);
    }
}
