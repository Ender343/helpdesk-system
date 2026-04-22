<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //

protected $fillable = [
'descripcion',
'estado',
'prioridad',
'creado_por',
'departamento_id',
'asignado_a'
];
}
