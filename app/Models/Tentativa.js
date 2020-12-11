'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tentativa extends Model {
    users(){
        return this.hasMany("App/Models/User")
    }
    respostas(){
        return this.hasMany("App/Models/Resposta")
    }
}

module.exports = Tentativa
