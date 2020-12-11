'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resolucoe extends Model {
    questoes(){
        return this.belongsTo("App/Models/Questoe")
    }
    alternativa(){
        return this.belongsTo("App/Models/Alternativa")
    }
}

module.exports = Resolucoe
