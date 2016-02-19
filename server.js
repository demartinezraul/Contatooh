var http = require('http');
/* informando caminho onde vai ser instanciado o módulo do express */
var app = require('./config/express')();

/* http.createServer recebe como parâmetro um 
request listener, nesse caso instância do express que sera aplicado ao evento request disparada em cada requisição. */
http.createServer(app).listen(app.get('port'), function(){ /* responsavel por subir o servidor */
	console.log('Express Server escutando na porta ' + 
				app.get('port'));
});