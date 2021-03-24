'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Resolucao = use('App/Models/Resolucoe')
/**
 * Resourceful controller for interacting with resolucoes
 */
class ResolucoeController {
  /**
   * Show a list of all resolucoes.
   * GET resolucoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
<<<<<<< HEAD
    const resolucao = await Resolucao.uery().with(["questao"]).fetch();
=======
    const resolucao = await Resolucao.query().with(["questoes"],["gabarito"] ).fetch();
>>>>>>> 54e44a3c0e2c34e66036dbe638ef243a8091aaef
    return resolucao;
  }



  /**
   * Create/save a new resolucoe.
   * POST resolucoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try{
      const data = request.only(['resolucao', 'gabarito','questoes_id'])
      const resolucao = await Resolucao.create(data);
      return resolucao;
    }catch (error) {
      response.status(500).send("Erro ao inserir resolução!");
    }
  }
  async questoes({ params, request, response, view }) {
    // const aluno = await Aluno.findOrFail(params.id);
    // return aluno;
    const questao = await Questoes.query().where("questoes_id", params.id).fetch();
    return questao;
  }
  /**
   * Display a single resolucoe.
   * GET resolucoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const resolucao = await Resolucao.query().where("questoes_id", "gabarito_id", params.id).fetch();
    return resolucao;
  }

 

  

  /**
   * Update resolucoe details.
   * PUT or PATCH resolucoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const resolucaos = await Resolucao.findOrFail(params.id);
      const {resolucao, gabarito,questoes_id} = request.only([
        "resolucao",
        "gabarito",
        "questoes_id",
      ]);
      resolucaos.resolucao=resolucao;
      resolucaos.gabarito=gabarito;
      resolucaos.questoes_id=questoes_id;
      await resolucaos.save();
      return resolucaos;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a resolução!");
    }
  }

  /**
   * Delete a resolucoe with id.
   * DELETE resolucoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try{
      const resolucao = await Resolucao.findOrFail(params.id);
      await resolucao.delete();
      return resolucao;
    }catch (error) {
      response.status(500).send("Erro ao apagar resolução!");
    }
  }
}

module.exports = ResolucoeController
