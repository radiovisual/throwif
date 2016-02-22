'use strict';
var _ = require('lodash');

module.exports.isType = function (item, type) {
	if (typeof item !== type) {
		throw new Error('Expected a ' + type);
	}
};

module.exports.isNotType = function (item, type) {
	if (typeof item === type) {
		throw new Error('Didn\'t expect a ' + type);
	}
};

module.exports.isEqual = function (a, b) {
	if (typeof a === 'symbol') {
		a = Object(a).toString();
	}
	if (typeof b === 'symbol') {
		b = Object(b).toString();
	}
	if (typeof a === 'function') {
		a = a.toString();
	}
	if (typeof b === 'function') {
		b = b.toString();
	}
	if (_.isEqual(a, b) === false) {
		throw new Error(JSON.stringify(a) + ' !== ' + JSON.stringify(b));
	}
};

module.exports.isNotEqual = function (a, b) {
	if (typeof a === 'symbol') {
		a = Object(a).toString();
	}
	if (typeof b === 'symbol') {
		b = Object(b).toString();
	}
	if (typeof a === 'function') {
		a = a.toString();
	}
	if (typeof b === 'function') {
		b = b.toString();
	}
	if (_.isEqual(a, b) === true) {
		throw new Error(JSON.stringify(a) + ' === ' + JSON.stringify(b));
	}
};

module.exports.greaterThan = function (a, b) {
	if (a > b) {
		throw new Error(a + ' > ' + b);
	}
};

module.exports.greaterThanEqual = function (a, b) {
	if (a >= b) {
		throw new Error(a + ' >= ' + b);
	}
};

module.exports.notGreaterThanEqual = function (a, b) {
	if (a >= b === false) {
		throw new Error(a + ' !>= ' + b);
	}
};

module.exports.notGreaterThan = function (a, b) {
	if (a > b === false) {
		throw new Error(a + ' !> ' + b);
	}
};

module.exports.lessThan = function (a, b) {
	if (a < b) {
		throw new Error(a + ' < ' + b);
	}
};

module.exports.notLessThan = function (a, b) {
	if (a < b === false) {
		throw new Error(a + ' !< ' + b);
	}
};

module.exports.lessThanEqual = function (a, b) {
	if (a <= b) {
		throw new Error(a + ' <= ' + b);
	}
};

module.exports.notLessThanEqual = function (a, b) {
	if (a <= b === false) {
		throw new Error(a + ' !<= ' + b);
	}
};
