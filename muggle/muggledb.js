'use strict';

var muggledb = {};
var almacen = {};

muggledb.set = function(key, value){
	almacen[key]=value;
};
muggledb.get = function(key) {
	return almacen[key];
};

module.exports = muggledb;