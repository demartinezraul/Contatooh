angular.module('contatooh', ['ngRoute']) // parametro 1: modulos. parametros 2: array
	.config(function($routeProvider) {

	  $routeProvider.when('/contatos', {
	  	templateUrl: 'partials/contatos.html',
	  	controller: 'ContatosController'
	  });

	  $routeProvider.when('/contato/:contatoId', {
	  	templateUrl: 'partials/contato.html',
	  	controller: 'ContatoController'
	  });
});