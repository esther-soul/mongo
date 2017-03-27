var httpStatus = require('http-status');

module.exports = function injectUser(router, models) {
	router.get('/usuarios/:username', function(request, response, next) {
		var user = models.user.findOne(request.params.username);
		if (user == undefined) { response.status(httpStatus.NOT_FOUND).json(user);}
		else { response.status(httpStatus.OK).json(user); }
	});


	router.delete('/usuarios/:username', function(request, response, next) {
		var user = models.user.remove(request.params.username);
		response.status(httpStatus.NO_CONTENT).json();
	});

	return router;
};

