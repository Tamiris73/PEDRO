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
 Route.get('/tentativa/:id', "TentativaController.show")
 Route.get("/area_Conhecimento/:id", "AreaConhecimentoController.show")
 Route.get('/questoes/:id', "QuestoeController")
 Route.get('/alternativa/:id', "AlternativaController")
 Route.get('/resolucao/:id', "ResolucoeController")
 Route.get('/resposta/:id', "RespostaController")

 Route.group(() => {
  Route.resource("/tentativa", "TentativaController").only([
    "index",
    "store",
    "update",
    "destroy",
  ]);}).middleware(["auth"]);
  Route.group(() => {
    Route.resource("/area_Conhecimento", "AreaConhecimentoController").only([
      "index",
      "store",
      "update",
      "destroy",
    ]);}).middleware(["auth"]);
  Route.group(() => {
    Route.resource("/questoes", "QuestoeController").only([
      "index",
      "store",
      "update",
      "destroy",
    ]);}).middleware(["auth"]);
  Route.group(() => {
    Route.resource("/alternativa", "AlternativaController").only([
      "index",
      "store",
      "update",
      "destroy",
    ]);}).middleware(["auth"]);
  Route.group(() => {
    Route.resource("/resolucao", "ResolucoeController").only([
      "index",
      "store",
      "update",
      "destroy",
    ]);}).middleware(["auth"]);
  Route.group(() => {
    Route.resource("/resposta", "RespostaController").only([
      "index",
      "store",
      "update",
      "destroy",
    ]);}).middleware(["auth"]);





