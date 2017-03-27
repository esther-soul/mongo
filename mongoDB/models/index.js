var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new mongoose.Schema({
	username: String, 
	firstname: String,
	lastname: String,
	password: String
});

module.exports = mongoose.model('user', user);