'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Questoes = use('App/Models/questoes')
/**
 * Resourceful controller for interacting with questoess
 */
class questoesController {
  /**
   * Show a list of all questoess.
   * GET questoess
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
   * Create/save a new questoes.
   * POST questoess
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
    const data = request.only(['questao', 'areaconhecimento_id'])
    const questoes = await Questoes.create(data);
    return questoes;
    } catch (error) {
      response.status(500).send("Erro ao inserir a questão!");
    }
  }

  /**
   * Display a single questoes.
   * GET questoess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const questoes = await Questoes.findOrFail(params.id);
    return questoes;
  }

  async areaconhecimento({ params, request, response, view }) {
    // const aluno = await Aluno.findOrFail(params.id);
    // return aluno;
    const questao = await Questoes.query().where("areaconhecimento_id", params.id).fetch();
    return questao;
  }

  /**
   * Update questoes details.
   * PUT or PATCH questoess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const questoes = await Questoes.findOrFail(params.id);
      const {questoes, areaconhecimento_id} = request.only([
        "questao", 
        "areaconhecimento_id"
      ]);
      questoes.questoes=questoes;
      questoes.areaconhecimento_id=areaconhecimento_id;
      await questoes.save();
      return questoes;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a questão!");
    }
  }

  /**
   * Delete a questoes with id.
   * DELETE questoess/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const questoes = await Questoes.findOrFail(params.id);
      await questoes.delete();
      return questoes;
    } catch (error) {
      response.status(500).send("Erro ao apagar a questão!");
    }
  }
}

module.exports = QuestoeController
