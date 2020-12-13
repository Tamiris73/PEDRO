'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResolucoesSchema extends Schema {
  up () {
    this.create('resolucoes', (table) => {
      table.increments()
      table.integer('questoes_id').unsigned().references('id').inTable('questoes').onUpdate('cascade').onDelete('cascade')
      table.integer('gabarito').unsigned().references('id').inTable('alternativas').onUpdate('cascade').onDelete('cascade')
      table.string('resolucao', 2000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('resolucoes')
  }
}

module.exports = ResolucoesSchema
