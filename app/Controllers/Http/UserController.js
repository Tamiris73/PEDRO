'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Usuario = use('App/Models/User')

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  

  async index({ request, response, view }) {
    const user = await nome.all();
    return user;
  }

  

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.only(["username"], ["email"], ["password"]);
      const usuario = await Usuario.create(data);
      return usuario;
    } catch (error) {
      response.status(500).send("Erro ao inserir usuário!");
    }
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
 
  async show({ params, request, response, view }) {} 


  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const usuario = await Usuario.findOrFail(params.id);
      const {username, email, password} = request.only(['username', 'email', 'password'])
      usuario.username=username;
      usuario.email=email;
      usuario.password=password;
      await usuario.save();
      return usuario;
    } catch (error) {
      response.status(500).send("Erro ao atualizar o usuario!");
    }
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const usuario = await Usuario.findOrFail(params.id);
      await usuario.delete();
      return usuario;
    } catch (error) {
      response.status(500).send("Erro ao apagar o usuario!");
    }
  }
}

module.exports = UsuarioController