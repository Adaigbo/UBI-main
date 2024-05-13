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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product');
            $table->unsignedBigInteger('user');
            $table->timestamp('fulfiled')->nullable();
            $table->decimal('price', 10, 2)->unsigned(); //In percentage
            $table->unsignedBigInteger('amount');
            $table->foreign('product')->references('id')->on('products');
            $table->foreign('user')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
