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
 Route.post('/register', "AuthController.register");
 Route.post('/authenticate', "AuthController.authenticate");
 Route.get('/user', "UserController.index");
 Route.get("area_Conhecimento", "AreaConhecimentoController.index");
 Route.get("/tentativa/:id/user", "TentativaController.user");
 Route.get('questoes/:id/areaconhecimento', "QuestoeController.areaconhecimento");
 Route.get('alternativa/:id/questoes', "AlternativaController.questoes");
 Route.get('resolucao/:id/questoes', "ResolucoeController.questoes");
 Route.get('resposta/:id/cursosquestoes', "RespostaController.questoes");
 Route.group(() => {
  Route.resource('tentativa', "TentativaController.index").apiOnly();
  Route.resource('questoes', "QuestoeController.index").apiOnly();
  Route.resource('alternativa', "AlternativaController.index").apiOnly();
  Route.resource('resolucao', "ResolucoeController.index").apiOnly();
  Route.resource('resposta', "RespostaController.index").apiOnly();
  Route.resource("user", "UserController").only([
    "show",
    "store",
    "update",
    "destroy",
  ]);
  Route.resource("area_Conhecimento", "AreaConhecimentoController").only()([
    "show",
    "store",
    "update",
    "destroy",
  ]);
}).middleware(["auth"]);