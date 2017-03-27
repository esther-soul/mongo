var express = require('express');
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var app = express();
var almacen={};


app.use(bodyParser.json());

app.get('/usuarios', function(request, response, next) {
	response.status(httpStatus.OK).json(almacen);
});

app.post('/usuarios', function(request, response, next) {
	var user={};
	user.username = request.body.username;
	user.firstname = request.body.firstname;
	user.lastname = request.body.lastname;
	user.password = request.body.password;
	almacen[user.username] = user;
	response.status(httpStatus.CREATED).json(almacen[user.username]);
});


app.get('/usuarios/:username', function(request, response, next) {
	var user={};
	var id = request.params.username;
	user = almacen[id];
	response.status(httpStatus.OK).json(user);
});

app.delete('/usuarios/:username', function(request, response, next) {
	var id = request.params.username;
	almacen[id] = undefined;
	response.status(httpStatus.NO_CONTENT).json('Se ha eliminado el usuario');
});

app.put('/usuarios/:username/password', function(request, response, next) {
	var user={};
	var id = request.params.username;
	var pass = request.body.password;
	user = almacen[id];
	user.password = pass;
	almacen[user.username] = user;
	response.status(httpStatus.OK).json('modificada la contraseña');
});
app.listen(8080,function(){
	console.log('La magia sucede en http://localhost:8080');
});
