'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alternativa extends Model {
    questoes(){
        return this.belongsTo("App/Models/Questoe")
    }
    resolucao(){
        return this.belongsTo("App/Models/Resolucoe")
    }
    resposta(){
        return this.belongsTo("App/Models/Resposta")
    }
}

module.exports = Alternativa
