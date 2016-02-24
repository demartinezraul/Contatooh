/* A variável express armazena uma função que, ao ser chamada, retorna uma instância do EXPRESS */
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser'); /* controla requisições ex: POST, PUT, DELETE */

module.exports = function() {
  var app = express(); /* app herdando o express na variavel app e retorna para app */

  /* configuração de ambiente */
  app.set('port', 3000); /* app.set recebe como parametro uma chave e um valor */

  /* Middleware */
  app.use(express.static('./public'));
  app.set('view engine', 'ejs'); /* view engine utilizada é EJS do index.ejs */
  app.set('views','./app/views'); /* definindo o diretorio onde ficarão nossas views */
  // novos middlewares
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  /* carregamento de rotas */
  load('models', {cwd: 'app'}) /* cwd é necessário para mudar o diretório padrão, pois a função procura a pasta raiz que seria contatooh e precisamos que ela considere a pasta contatooh/app */
    .then('controllers')
    .then('routes')
    .into(app); /* adiciona dinamicamente na instância do express propriedades que apontam para esse módulos */

  return app;
};