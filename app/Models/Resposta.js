'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resposta extends Model {
    questoes(){
        return this.hasOne("App/Models/Questoe")
    }
    alternativas(){
        return this.hasMany("App/Models/Alternativa")
    }
    tentativa(){
        return this.belongsTo("App/Models/Tentativa")
    }
}

module.exports = Resposta
