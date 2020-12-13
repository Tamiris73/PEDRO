'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlternativasSchema extends Schema {
  up () {
    this.create('alternativas', (table) => {
      table.increments()
      table.integer('questoes_id').unsigned().references('id').inTable('questoes').onUpdate('cascade').onDelete('cascade')
      table.string('alternativa', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alternativas')
  }
}

module.exports = AlternativasSchema
