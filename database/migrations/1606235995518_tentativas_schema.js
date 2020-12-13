'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TentativasSchema extends Schema {
  up () {
    this.create('tentativas', (table) => {
      table.increments()
      table.integer('users_id').unsigned().references('id').inTable('user').onUpdate('cascade').onDelete('cascade')
      table.integer('respostas_id').unsigned().references('id').inTable('respostas').onUpdate('cascade').onDelete('cascade')
      table.datetime('tentativa').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tentativas')
  }
}

module.exports = TentativasSchema
