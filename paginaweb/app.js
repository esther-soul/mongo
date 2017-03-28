var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/test');
app.use(bodyParser.json());
var models = require('./models');
var getRoutes = require('./routes');
app.use(getRoutes(models));

app.listen(8080,function(){
	console.log('La magia sucede en http://localhost:8080');
});
module.exports=app;