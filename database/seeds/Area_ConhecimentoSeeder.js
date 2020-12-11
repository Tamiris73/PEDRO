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
const AreaConhecimento = use('App/Models/AreaConhecimento');

class Area_ConhecimentoSeeder {
  async run () {
    const area_conhecimento = [
      {nome: "Matemática"},
      {nome: "Português e Literatura"},
      {nome: "Química"},
      {nome: "Física"},
      {nome: "Biologia"},
      {nome: "Geografia"},
      {nome: "História"},
    ];
    await AreaConhecimento.createMany(area_conhecimento);
  }
}

module.exports = Area_ConhecimentoSeeder
