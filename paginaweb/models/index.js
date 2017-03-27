/**var models={};
models.user=require('./user')();
module.exports=models; **/
var Schema = require('mongoose').Schema,
	ObjectId=Schema.ObjectId;

var user = new Schema({
	username: String, 
	firstname: String,
	lastname: String,
	password: String
});

