<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void
{
    Schema::create('tickets', function (Blueprint $table) {
        $table->id();
        $table->string('titulo')->nullable();
        $table->text('descripcion');
        $table->string('estado')->default('abierto');
        $table->string('prioridad')->default('media');

        $table->foreignId('creado_por')->constrained('users');
        $table->foreignId('asignado_a')->nullable()->constrained('users');

        $table->foreignId('departamento_id')->constrained();
        $table->foreignId('equipo_id')->nullable()->constrained();

        $table->timestamp('fecha_asignacion')->nullable();
        $table->timestamp('fecha_cierre')->nullable();

        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
