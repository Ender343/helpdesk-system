<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    // Listar tickets
    public function index()
    {
        $tickets = Ticket::latest()->get();

        return response()->json($tickets);
    }

    // Crear ticket
    public function store(Request $request)
    {
        $request->validate([
            'descripcion' => 'required'
        ]);

   $ticket = Ticket::create([
    'descripcion' => $request->descripcion,
    'estado' => 'abierto',
    'prioridad' => 'media',
    'creado_por' => $request->user()->id,
    'departamento_id' => $request->user()->departamento_id ?? null
]);

return response()->json($ticket);
    }

    // Ver ticket individual
    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);

        return response()->json($ticket);
    }

    // Cambiar estado ticket
    public function update(Request $request, $id)
{
    $ticket = Ticket::findOrFail($id);

    $ticket->update([
        'estado' => $request->estado ?? $ticket->estado,
        'prioridad' => $request->prioridad ?? $ticket->prioridad,
        'asignado_a' => $request->asignado_a ?? $ticket->asignado_a,
    ]);

    return response()->json($ticket);
}

    // Eliminar ticket (opcional)
    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);

        $ticket->delete();

        return response()->json([
            'message' => 'Ticket eliminado'
        ]);
    }
}