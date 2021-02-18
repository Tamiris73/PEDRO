'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
 Route.post('/register', "AuthController.register")
 Route.post('/authenticate', "AuthController.authenticate")
 Route.get('/user', "UserController.index")
 Route.post('/user', "UserController.store")
 Route.get('/tentativa', "TentativaController.show")
 Route.get("/area_Conhecimento", "AreaConhecimentoController.show")
 Route.group(()=>{
  Route.resource('/questoes', "QuestoeController").apiOnly();
  Route.resource('/alternativa', "AlternativaController").apiOnly();
  Route.resource('/resolucao', "ResolucoeController").apiOnly();
  Route.resource('/resposta', "RespostaController").apiOnly();
 }).middleware(["auth"]);