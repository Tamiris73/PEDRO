'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreaConhecimentosSchema extends Schema {
  up () {
    this.create('area_conhecimentos', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('area_conhecimentos')
  }
}

module.exports = AreaConhecimentosSchema
