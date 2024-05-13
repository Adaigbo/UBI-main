<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $executive = Role::create(['guard_name' => 'api', 'name' => 'Executive']);
        Role::create(['guard_name' => 'api', 'name' => 'Farmer']);
        Role::create(['guard_name' => 'api', 'name' => 'Exporter']);
        Role::create(['guard_name' => 'api', 'name' => 'Logicstics']);
        Role::create(['guard_name' => 'api', 'name' => 'Guest']);

        Permission::create(['guard_name' => 'api', 'name' => 'View User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Activate User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Deactivate User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Dashboard'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Create User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Fulfil Order'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Delete User'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Roles'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Permissions'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update Permissions'])->assignRole($executive);
        // Permission::create(['name' => 'Update Roles'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update Products'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Create Products'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Create Offers'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Offers'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update Offers'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Delete Offers'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Insert Announcement'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update Announcement'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Announcement'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Delete Announcement'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Delete Order'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'View Order'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Insert Order'])->assignRole($executive);
        Permission::create(['guard_name' => 'api', 'name' => 'Update Order Status'])->assignRole($executive);

        $user = User::create([
            "username" => "asjidale",
            "password" => '$2y$12$GO78H5Nk7RhWVi18uizIsOGsi9dFy7QBrbPAfQg.d74Zb..Z59FLO',
            "email" => "asjidale@gmail.com",
            "name" => 'Asjid Ali',
        ]);

        $user->assignRole($executive);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
