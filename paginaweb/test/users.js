'use strict';
var request = require('supertest');
var assert = require('assert');
var app = require('../app');

var usuario={"username":"John", "firstname":"John", "lastname":"Doe", "password":"pass"	};
describe('/usuarios', function(){
	it('debe devolver una lista vacia cuando no hay usuario', function(done){
		request(app).get('/usuarios').expect(200).end(function(err, res){
			if (err) return done(err);
			assert(res.body.length === 0, 'La lista no esta vacia');
			done();
		});
	});
	it ('debe introducir un usuario en el post', function(done){
		request(app).post('/usuarios').send(usuario).expect(201).end(function(err, res){
			if (err) return done(err);
			assert(res.body.username === usuario.username, 'Distinto usuario');
			assert(res.body.firstname === usuario.firstname, 'Distinto nombre');
			assert(res.body.lastname === usuario.lastname, 'Distinto apellido');
			assert(res.body.password === usuario.password, 'Distinta password');
			done();
		});
	});
	it ('debe devolver el usuario introducido en el post', function(done){
		request(app).get('/usuarios').expect(200).end(function(err, res){
			if (err) return done(err);
			assert(res.body[0].username === usuario.username, 'Distinto usuario');
			assert(res.body[0].firstname === usuario.firstname, 'Distinto nombre');
			assert(res.body[0].lastname === usuario.lastname, 'Distinto apellido');
			assert(res.body[0].password === usuario.password, 'Distinta password');
			done();
		});
	});
});

describe('/usuarios/:username', function(){
	it('devuelve un usuario especifico', function(done){
		request(app).get('/usuarios/John').expect(200).end(function(err,res){
			if (err) return done(err);
			done()
		});
	})
	it('elimina un usuario especifico', function(done){
		request(app).delete('/usuarios/John').expect(204).end(function(err,res){
			if (err) return done(err);
			done();
		});
	})
	it('no devuelve ningun usuario', function(done){
		request(app).get('/usuarios/John').expect(404).end(function(err,res){
			if (err) return done(err);
			done();
		});
	});
});