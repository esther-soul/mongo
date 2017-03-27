'use strict';
var Router=require('express').Router;

module.exports = function exportRoutes(models) {
	var router = Router();
	var injectUser = require('./user');	
	injectUser(router, models);
	var injectUsers = require('./users');	
	injectUsers(router, models);

	return router;

};