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
    const resposta = await Resposta.query().where("questoes_id", params.id).fetch();
    const resposta = await Resposta.query().with(["questoes"], ["alternativas"]).fetch();
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
    try{
      const data = request.only(['resposta','alternativas_id', 'questoes_id'])
      const resposta = await Resposta.create(data);
      return resposta;
    } catch (error) {
      response.status(500).send("Erro ao inserir a resposta!");
    }
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
    const resposta = await Resposta.query().where("questoes_id" , "alternativas_id", params.id).fetch();
    return resposta;
  }
  async questoes({ params, request, response, view }) {
    // const aluno = await Aluno.findOrFail(params.id);
    // return aluno;
    const questao = await Questoes.query().where("questoes_id", params.id).fetch();
    return questao;
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
    try {
      const respostas = await Resposta.findOrFail(params.id);
    const {resposta, alternativas_id,questoes_id} = request.only([
      "resposta", 
      "alternativas_id", 
      "questoes_id"
      ]);
      respostas.resposta=resposta;
      respostas.alternativas_id=alternativas_id;
      respostas.questoes_id=questoes_id;
      await respostas.save();
      return respostas;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a resposta!");
    }
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
    try{
      const resposta = await Resposta.findOrFail(params.id);
      await resposta.delete();
      return resposta;
    } catch (error) {
      response.status(500).send("Erro ao apagar a resposta!");
    }
  }
}

module.exports = RespostaController
