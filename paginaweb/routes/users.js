var httpStatus = require('http-status');

module.exports = function injectUser(router, models) {
	router.get('/usuarios', function(request, response, next) {
		var usuarios = models.user.findAll();
		response.status(httpStatus.OK).json(usuarios);
	});


	router.post('/usuarios', function(request, response, next) {
		var newUser = models.user.create(request.body);
		response.status(httpStatus.CREATED).json(newUser);
	});
	return router;
};