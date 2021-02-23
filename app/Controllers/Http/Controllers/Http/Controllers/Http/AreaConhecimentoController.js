'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const AreaConhecimento = use('App/Models/AreaConhecimento')
/**
 * Resourceful controller for interacting with areaconhecimentos
 */
class AreaConhecimentoController {
  /**
   * Show a list of all areaconhecimentos.
   * GET areaconhecimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
  async index({ request, response, view }) {
    const area_conhecimento = await nome.all();
    return area_conhecimento;
  }


  /**
   * Create/save a new areaconhecimento.
   * POST areaconhecimentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['nome'])
    const area_conhecimento = await AreaConhecimento.create(data);
    return area_conhecimento;
  }

  /**
   * Display a single areaconhecimento.
   * GET areaconhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

 
  async show({ params, request, response, view }) {}






  /**
   * Update areaconhecimento details.
   * PUT or PATCH areaconhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const area_conhecimento = await AreaConhecimento.findOrFail(params.id);
    const {nome} = request.only(['nome'])
    area_conhecimento.nome=nome;
    await area_conhecimento.save();
    return area_conhecimento;
  }

  /**
   * Delete a areaconhecimento with id.
   * DELETE areaconhecimentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const area_conhecimento = await AreaConhecimento.findOrFail(params.id);
    await area_conhecimento.delete();
    return area_conhecimento;
  }
}

module.exports = AreaConhecimentoController
