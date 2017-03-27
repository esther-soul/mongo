'use strict';
const muggledb = require('./muggledb');
const assert = require('assert');

describe ('muggledb', function() {
	it ('should have a set method', function() {
		assert(muggledb.set, 'set method not found');
	});
	it ('should have a get method', function() {
		assert(muggledb.get, 'get method not found');
	});
	it ('primero hacer un set y luego un get', function() {
		muggledb.set('key', 3);
		var value = muggledb.get('key');
		assert(value === 3,'method is working');
	});
});