'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AreaConhecimento extends Model {
    questoes(){
        return this.hasMany("App/Models/Questoe")
    }
}

module.exports = AreaConhecimento
