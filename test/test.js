import test from 'ava';
import throwif from './../lib/index.js';
import types from './../lib/types.js';

test('types', t => {
	t.is(types.function, 'function');
	t.is(types.string, 'string');
	t.is(types.object, 'object');
	t.is(types.boolean, 'boolean');
	t.is(types.array, 'array');
	t.is(types.date, 'date');
	t.is(types.number, 'number');
	t.is(types.regex, 'regex');
	t.is(types.null, 'null');
	t.is(types.undefined, 'undefined');
	t.is(types.symbol, 'symbol');
	t.is(types.promise, 'promise');
});

test('Expect a string as second parameter', t => {
	t.throws(() => {
		throwif({}, {});
	}, 'throwif expects an equality-string or typeof-string');
});

test('throws if too many spaces in string (invalid syntax)', t => {
	t.throws(() => {
		throwif({}, '! = = f u n c t i o n');
	}, 'Invalid syntax for throwif string');
});

test('throws if empty string (invalid syntax)', t => {
	t.throws(() => {
		throwif({}, '');
	}, 'throwif expects an equality-string or typeof-string');
});

test('throws when no object supplied for comparison', t => {
	t.throws(() => {
		throwif('string', '!==');
	}, 'You must supply an object for comparison in equality operations');
});

test('throws when invalid type used in typeof', t => {
	t.throws(() => {
		throwif('string', '!== unicorn');
	}, 'Invalid type "unicorn" supplied to throwif');
});

test('throws when invalid operator used in typeof', t => {
	t.throws(() => {
		throwif('string', '!!== function');
	}, 'Invalid operator "!!==" supplied to throwif');
});
