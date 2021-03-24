'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Tentativa = use('App/Models/Tentativa')

/**
 * Resourceful controller for interacting with tentativas
 */
class TentativaController {
  /**
   * Show a list of all tentativas.
   * GET tentativas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const tentativa = await Tentativa.query().with(["user"]).fetch();
    return tentativa;
  }

  

  /**
   * Create/save a new tentativa.
   * POST tentativas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const data = request.only(['tentativa', 'user_id', 'respostas_id'])
      const tentativa = await Tentativa.create(data);
      return tentativa;
    }catch (error) {
      response.status(500).send("Erro ao inserir tentativa!");
    }
  }

  /**
   * Display a single tentativa.
   * GET tentativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const tentativa = await Tentativa.findOrFail(params.id);
    return tentativa;
  }


  /**
   * Update tentativa details.
   * PUT or PATCH tentativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const tentativas = await Tentativa.findOrFail(params.id);
      const {tentativa, user_id, respostas_id} = request.only([
        "tentativa",
        "user_id",
        "respostas_id",
      ]);
      tentativas.tentativa=tentativa;
      tentativas.user_id=user_id;
      tentativas.respostas_id=respostas_id;
      await tentativas.save();
      return tentativas;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a tentativa!");
    }
  }
  async user({ params, request, response, view }) {
    // const tentativa = await Aluno.findOrFail(params.id);
    // return tentativa;
    const tentativa = await Tentativa.query().where("user_id", params.id).fetch();
    return tentativa;
  }

  /**
   * Delete a tentativa with id.
   * DELETE tentativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try{
      const tentativa = await Tentativa.findOrFail(params.id);
      await tentativa.delete();
      return tentativa;
    }catch (error) {
      response.status(500).send("Erro ao apagar a tentativa!");
    }
  }
}

module.exports = TentativaController

