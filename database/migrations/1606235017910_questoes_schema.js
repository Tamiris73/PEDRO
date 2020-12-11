'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestoesSchema extends Schema {
  up () {
    this.create('questoes', (table) => {
      table.increments()
      table.integer('area_conhecimentos_id').unsigned().references('id').inTable('area_conhecimentos').onUpdate('cascade').onDelete('cascade')
      table.text('questao', 1000).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questoes')
  }
}

module.exports = QuestoesSchema
