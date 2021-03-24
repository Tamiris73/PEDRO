'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const AreaConhecimento = use('App/Models/areaConhecimento')
/**
 * Resourceful controller for interacting with areaConhecimentos
 */
class areaConhecimentoController {
  /**
   * Show a list of all areaConhecimentos.
   * GET areaConhecimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
<<<<<<< HEAD
  async index ({ request, response, view }) {
    const areaConhecimento = await AreaConhecimento.all();
    return areaConhecimento;
=======
  
  async index({ request, response, view }) {
    const area_conhecimento = await nome.all();
    return area_conhecimento;
>>>>>>> 54e44a3c0e2c34e66036dbe638ef243a8091aaef
  }


  /**
   * Create/save a new areaConhecimento.
   * POST areaConhecimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
    const data = request.only(['nome'])
    const areaConhecimento = await AreaConhecimento.create(data);
    return areaConhecimento;
    } catch (error) {
      response.status(500).send("Erro ao inserir área de conhecimento!");
    }
  }

  /**
   * Display a single areaConhecimento.
   * GET areaConhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
<<<<<<< HEAD
  async show ({ params, request, response, view }) {
    const areaConhecimento = await AreaConhecimento.findOrFail(params.id);
    return areaConhecimento;
  }
=======

 
  async show({ params, request, response, view }) {}






>>>>>>> 54e44a3c0e2c34e66036dbe638ef243a8091aaef
  /**
   * Update areaConhecimento details.
   * PUT or PATCH areaConhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const areaConhecimentos = await AreaConhecimento.findOrFail(params.id);
      const {nome} = request.only([
        "nome"
      ]);
      areaConhecimentos.nome=nome;
      await areaConhecimentos.save();
      return areaConhecimentos;
    } catch (error) {
      response.status(500).send("Erro ao atualizar a área de conhecimento!");
    }
  }

  /**
   * Delete a areaConhecimento with id.
   * DELETE areaConhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const areaConhecimento = await AreaConhecimento.findOrFail(params.id);
      await areaConhecimento.delete();
      return areaConhecimento;
    } catch (error) {
      response.status(500).send("Erro ao apagar a área de conhecimento!");
    }
  }
}

module.exports = areaConhecimentoController
