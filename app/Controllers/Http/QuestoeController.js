'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Questoes = use('App/Models/Questoe')
/**
 * Resourceful controller for interacting with questoes
 */
class QuestoeController {
  /**
   * Show a list of all questoes.
   * GET questoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const questoes = await Questoes.query().with(["area_conhecimento"]).fetch();
    return questoes;
  }


  /**
   * Create/save a new questoe.
   * POST questoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['questao', 'areaconhecimento_id'])
    const questao = await Questoes.create(data);
    return questao;
  }

  /**
   * Display a single questoe.
   * GET questoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
   async show ({ params, request, response, view }) {
    const questao = await Questoes.query().where("areaconhecimento_id", params.id).fetch();
    return questao;
  }



  /**
   * Update questoe details.
   * PUT or PATCH questoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const questoes = await Questoes.findOrFail(params.id);
    const {questao, areaconhecimento_id} = request.only(['questao', 'areaconhecimento_id'])
    questoes.questao=questao;
    questoes.areaconhecimento_id=areaconhecimento_id;
    await questoes.save();
    return questoes;
  }

  /**
   * Delete a questoe with id.
   * DELETE questoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const questao = await Questoes.findOrFail(params.id);
    await questao.delete();
    return questao;
  }
}

module.exports = QuestoeController
