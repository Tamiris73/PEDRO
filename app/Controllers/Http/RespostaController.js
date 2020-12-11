'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Resposta = use('App/Models/Resposta')

/**
 * Resourceful controller for interacting with respostas
 */
class RespostaController {
  /**
   * Show a list of all respostas.
   * GET respostas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const resposta = await Resposta.all();
    return resposta;
  }



  /**
   * Create/save a new resposta.
   * POST respostas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['resposta','alternativas_id', 'questoes_id'])
    const resposta = await Resposta.create(data);
    return resposta;
  }

  /**
   * Display a single resposta.
   * GET respostas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const resposta = await Resposta.findOrFail(params.id);
    return resposta;
  }



  /**
   * Update resposta details.
   * PUT or PATCH respostas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const respostas = await Resposta.findOrFail(params.id);
    const {resposta, alternativas_id,questoes_id} = request.only(['resposta', 'alternativas_id', 'questoes_id'])
    respostas.resposta=resposta;
    respostas.alternativas_id=alternativas_id;
    respostas.questoes_id=questoes_id;
    await respostas.save();
    return respostas;
  }

  /**
   * Delete a resposta with id.
   * DELETE respostas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const resposta = await Resposta.findOrFail(params.id);
    await resposta.delete();
    return resposta;
  }
}

module.exports = RespostaController
