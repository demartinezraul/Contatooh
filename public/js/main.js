/* angular.module(parametros 1: modulos | parametros 2: array informando os modulos que nossa aplicação é dependente) */
angular.module('contatooh',['ngRoute', 'ngResource'])
  .config(function($routeProvider) {

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contato.html', 
    	controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });

    /* objeto redirectTo - aponta para uma rota alternativa
    se a página não existir ele aponta para a lista de contatos */
    $routeProvider.otherwise({redirectTo: '/contatos'});
});