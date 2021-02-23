'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Alternativa = use('App/Models/Alternativa')
/**
 * Resourceful controller for interacting with alternativas
 */
class AlternativaController {
  /**
   * Show a list of all alternativas.
   * GET alternativas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const alternativa = await Alternativa.query().with(["questoes"]).fetch();
    return alternativa;
  }




  /**
   * Create/save a new alternativa.
   * POST alternativas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['alternativa', 'questoes_id'])
    const alternativa = await Alternativa.create(data);
    return alternativa;
  }

  /**
   * Display a single alternativa.
   * GET alternativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const alternativa = await Alternativa.query().where("questoes_id", params.id).fetch();
    return alternativa;
  }

  
  /**
   * Update alternativa details.
   * PUT or PATCH alternativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const alternativas = await Alternativa.findOrFail(params.id);
    const {alternativa, questoes_id} = request.only(['alternativa', 'questoes_id'])
    alternativas.alternativa=alternativa;
    alternativas.questoes_id=questoes_id;
    await alternativas.save();
    return alternativas;
  }

  /**
   * Delete a alternativa with id.
   * DELETE alternativas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const alternativa = await Alternativa.findOrFail(params.id);
    await alternativa.delete();
    return alternativa;
  }
}

module.exports = AlternativaController
