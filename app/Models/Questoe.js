'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Questoe extends Model {
    area_conhecimento(){
        return this.belongsTo("App/Models/AreaConhecimento")
    }
    alternativa(){
        return this.hasMany("App/Models/Alternativa")
    }
    resolucao(){
        return this.belongsTo("App/Models/Resolucoe")
    }
    resposta(){
        return this.belongsTo("App/Models/Resposta")
    }
}

module.exports = Questoe
