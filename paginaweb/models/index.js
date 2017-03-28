var moongose = require('mongoose');
	
var Schema = mongoose.Schema,
	ObjectId=Schema.ObjectId;

var modelsSchema= new Schema ({
	username: String, 
	firstname: String,
	lastname: String,
	password: String
});

var models = mongoose.model('models', modelsSchema);
module.exports=models;