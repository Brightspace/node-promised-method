'use strict';

var expect = require('chai').expect;

require('chai').use(require('chai-as-promised'));

var promised = require('../');

describe('promised-method', function() {
	it('should reject when method throws', function() {
		var e = new Error('thrown error');

		var method = promised(function() {
			throw e;
		});

		return expect(method()).to.be.rejectedWith(e);
	});

	it('should resolve with method return value', function() {
		var expected = {};

		var method = promised(function() {
			return expected;
		});

		return expect(method()).to.eventually.equal(expected);
	});

	it('should maintain context', function() {
		function Clazz() {}
		Clazz.prototype.foo = promised(/* @this */ function() {
			return this;
		});

		var context = new Clazz();

		return expect(context.foo()).to.eventually.equal(context);
	});

	it('should pass all arguments', function() {
		var expected = ['cats', 'dogs', 'lemurs'];

		var method = promised(function() {
			return Array.prototype.slice.apply(arguments);
		});

		return expect(method.apply(null, expected)).to.eventually.deep.equal(expected);
	});
});
