'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespostasSchema extends Schema {
  up () {
    this.create('respostas', (table) => {
      table.increments()
      table.integer('questoes_id').unsigned().references('id').inTable('questoes').onUpdate('cascade').onDelete('cascade')
      table.integer('alternativas_id').unsigned().references('id').inTable('alternativas').onUpdate('cascade').onDelete('cascade')
      table.string('resposta', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('respostas')
  }
}

module.exports = RespostasSchema
