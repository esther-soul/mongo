var httpStatus = require('http-status');

module.exports = function injectUser(router, models) {
	router.get('/usuarios', function(request, response, next) {
		response.status(httpStatus.OK).json(models.findAll());
	});


	router.post('/usuarios', function(request, response, next) {
		models.create(request.body);
		response.status(httpStatus.CREATED).json('User Created');
	});
	return router;
};