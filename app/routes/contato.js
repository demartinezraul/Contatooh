module.exports = function(app) {

	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(controller.listaContatos)
		.post(controller.salvaContato)

	app.route('/contatos/:id') /* curinga que vai receber o parametro ID para idenfificar o contato */
		.get(controller.obtemContato)
		.delete(controller.removeContato);
};