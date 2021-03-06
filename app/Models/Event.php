<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function eventType()
    {
        return $this->belongsTo(EventType::class,);
    }

//->whereMonth('created_at', '05')
//
//->get();
}
