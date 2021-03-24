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
    try {
    const data = request.only(['alternativa', 'questoes_id'])
    const alternativa = await Alternativa.create(data);
    return alternativa;
    } catch (error) {
      response.status(500).send("Erro ao inserir tentativa!");
    }
  }
  async questoes({ params, request, response, view }) {
    // const aluno = await Aluno.findOrFail(params.id);
    // return aluno;
    const questao = await Questoes.query().where("questoes_id", params.id).fetch();
    return questao;
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
    try {
      const alternativas = await Alternativa.findOrFail(params.id);
      const {alternativa, questoes_id} = request.only([
        "alternativa",
        "questoes_id",
      ]);
      alternativas.alternativa=alternativa;
      alternativas.questoes_id=questoes_id;
      await alternativas.save();
      return alternativas;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a tentativa!");
    }
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
    try {
      const alternativa = await Alternativa.findOrFail(params.id);
      await alternativa.delete();
      return alternativa;
    } catch (error) {
      response.status(500).send("Erro ao apagar a tentativa!");
    }
  }
}

module.exports = AlternativaController
