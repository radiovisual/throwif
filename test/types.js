import test from 'ava';
import throwif from './../lib/index.js';
import version from 'node-ver';

const symbols = version().major >= 4;

const fun = () => {};
const und = undefined;
const str = 'string';
const obj = {};
const boo = true;
const num = 42;
const sym = symbols ? Symbol('foo') : null;

// NOT EQUAL
test('!== string', t => {
	t.throws(() => {
		throwif(num, '!== string');
	}, 'Expected a string');
});

test('!== function', t => {
	t.throws(() => {
		throwif(num, '!== function');
	}, 'Expected a function');
});

test('!== object', t => {
	t.throws(() => {
		throwif(num, '!== object');
	}, 'Expected a object');
});

test('!== boolean', t => {
	t.throws(() => {
		throwif(num, '!== boolean');
	}, 'Expected a boolean');
});

test('!== undefined', t => {
	t.throws(() => {
		throwif(num, '!== undefined');
	}, 'Expected a undefined');
});

test('!== number', t => {
	t.throws(() => {
		throwif(str, '!== number');
	}, 'Expected a number');
});

// EQUAL
test('=== string', t => {
	t.throws(() => {
		throwif(str, '=== string');
	}, 'Didn\'t expect a string');
});

test('=== function', t => {
	t.throws(() => {
		throwif(fun, '=== function');
	}, 'Didn\'t expect a function');
});

test('=== object', t => {
	t.throws(() => {
		throwif(obj, '=== object');
	}, 'Didn\'t expect a object');
});

test('=== boolean', t => {
	t.throws(() => {
		throwif(boo, '=== boolean');
	}, 'Didn\'t expect a boolean');
});

test('=== undefined', t => {
	t.throws(() => {
		throwif(und, '=== undefined');
	}, 'Didn\'t expect a undefined');
});

test('=== number', t => {
	t.throws(() => {
		throwif(num, '=== number');
	}, 'Didn\'t expect a number');
});

test('silent on valid objects !==', t => {
	t.is(typeof throwif(num, '!== number'), 'undefined');
	t.is(typeof throwif(fun, '!== function'), 'undefined');
	t.is(typeof throwif(und, '!== undefined'), 'undefined');
	t.is(typeof throwif(str, '!== string'), 'undefined');
	t.is(typeof throwif(obj, '!== object'), 'undefined');
	t.is(typeof throwif(boo, '!== boolean'), 'undefined');
});

test('silent on valid objects ===', t => {
	t.is(typeof throwif(num, '=== function'), 'undefined');
	t.is(typeof throwif(fun, '=== object'), 'undefined');
	t.is(typeof throwif(und, '=== string'), 'undefined');
	t.is(typeof throwif(str, '=== function'), 'undefined');
	t.is(typeof throwif(obj, '=== function'), 'undefined');
	t.is(typeof throwif(boo, '=== function'), 'undefined');
});

if (symbols) {
	test('!== symbol', t => {
		t.throws(() => {
			throwif(str, '!== symbol');
		}, 'Expected a symbol');
	});

	test('symbol silent on valid objects !==', t => {
		t.is(typeof throwif(sym, '!== symbol'), 'undefined');
	});

	test('symbol silent on valid objects ===', t => {
		t.is(typeof throwif(sym, '=== function'), 'undefined');
	});
}
