'use strict';
var fn = require('./functions.js');

var operators = ['===', '!==', '>', '!>', '>=', '!>=', '<', '<=', '!<=', '!<'];
var types = ['string', 'function', 'number', 'object', 'symbol', 'boolean', 'undefined'];

module.exports = function (source, str, target) {
	// Anyone else appreciate the irony here?
	if (typeof str !== 'string' || str.trim() === '') {
		throw new TypeError('throwif expects an equality-string or typeof-string');
	}

	// Is this an equality-string, or typeof-string?
	var parts = str.trim().toLowerCase().split(' ');
	var len = parts.length;

	var operator;
	var type;

	if (len === 0 || len > 2) {
		throw new Error('Invalid syntax for throwif string');
	}

	if (len === 1 && typeof target === 'undefined') {
		throw new Error('You must supply an object for comparison in equality operations');
	}

	operator = parts[0];

	if (operators.indexOf(operator) < 0) {
		throw new Error('Invalid operator "' + operator + '" supplied to throwif');
	}

	// typeof mode
	if (len === 2) {
		type = parts[1];

		if (types.indexOf(type) < 0) {
			throw new Error('Invalid type "' + type + '" supplied to throwif');
		}

		if (operator === '!==') {
			fn.isType(source, type);
		}

		if (operator === '===') {
			fn.isNotType(source, type);
		}
	}

	// equality mode
	if (len === 1) {
		if (operator === '!==') {
			fn.isEqual(source, target);
		} else if (operator === '===') {
			fn.isNotEqual(source, target);
		} else if (operator === '>') {
			fn.greaterThan(source, target);
		} else if (operator === '!>') {
			fn.notGreaterThan(source, target);
		} else if (operator === '>=') {
			fn.greaterThanEqual(source, target);
		} else if (operator === '!>=') {
			fn.notGreaterThanEqual(source, target);
		} else if (operator === '<') {
			fn.lessThan(source, target);
		} else if (operator === '!<') {
			fn.notLessThan(source, target);
		} else if (operator === '<=') {
			fn.lessThanEqual(source, target);
		} else if (operator === '!<=') {
			fn.notLessThanEqual(source, target);
		}
	}
};

