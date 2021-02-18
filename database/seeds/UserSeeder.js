'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User');

class UserSeeder {
  async run () {
    const User = [
      {username: "Pedro", email:"aaaaa", password:"PedroPedro"}
    ];
    await User.createMany(User);
  }
}

module.exports = UserSeeder
