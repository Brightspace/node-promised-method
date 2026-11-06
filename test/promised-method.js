'use strict';

const { describe, it } = require('node:test');

const expect = require('chai').expect;

require('chai').use(require('chai-as-promised').default);

const promised = require('../');

describe('promised-method', function() {
	it('should reject when method throws', function() {
		const e = new Error('thrown error');

		const method = promised(function() {
			throw e;
		});

		return expect(method()).to.be.rejectedWith(e);
	});

	it('should resolve with method return value', function() {
		const expected = {};

		const method = promised(function() {
			return expected;
		});

		return expect(method()).to.eventually.equal(expected);
	});

	it('should maintain context', function() {
		function Clazz() {}
		Clazz.prototype.foo = promised(/* @this */ function() {
			return this;
		});

		const context = new Clazz();

		return expect(context.foo()).to.eventually.equal(context);
	});

	it('should pass all arguments', function() {
		const expected = ['cats', 'dogs', 'lemurs'];

		const method = promised(function() {
			return Array.prototype.slice.apply(arguments);
		});

		return expect(method.apply(null, expected)).to.eventually.deep.equal(expected);
	});
});
