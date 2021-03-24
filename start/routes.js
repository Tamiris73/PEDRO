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
<<<<<<< HEAD
 Route.resource("area_Conhecimento", "AreaConhecimentoController.index")
 Route.get("/tentativa/:id/user", "TentativaController.user");
  Route.resource('questoes', "QuestoeController.areaconhecimento")
  Route.resource('alternativa', "AlternativaController.questoes")
  Route.resource('resolucao', "ResolucoeController.questoes")
  Route.resource('resposta', "RespostaController.questoes")
Route.group(() => {
  Route.resource('tentativa', "TentativaController.index").apiOnly();
  Route.resource("area_Conhecimento", "AreaConhecimentoController.index").apiOnly();
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
  // Route.post("/alunos", "AlunoController.store");
  // Route.get("/alunos/:id", "AlunoController.show");
  // Route.get("/alunos", "AlunoController.index");
  // Route.put("/alunos/:id", "AlunoController.update");
  // Route.delete("/alunos/:id", "AlunoController.destroy");
}).middleware(["auth"]);
=======
 Route.get('/tentativa', "TentativaController.index")
 Route.get("/area_Conhecimento", "AreaConhecimentoController.index")
 Route.get('/questoes', "QuestoeController.index")
 Route.get('/alternativa', "AlternativaController.index")
 Route.get('/resolucao', "ResolucoeController.index")
 Route.get('/resposta', "RespostaController.index")

 





>>>>>>> 54e44a3c0e2c34e66036dbe638ef243a8091aaef
