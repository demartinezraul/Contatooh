/* angular.module(parametros 1: modulos | parametros 2: array informando os modulos que nossa aplicação é dependente) */
angular.module('contatooh', ['ngRoute','ngResource'])
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
});