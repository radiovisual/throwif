import test from 'ava';
import throwif from './../lib/index.js';
import version from 'node-ver';

const symbols = version().major >= 4;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// EQUAL
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
test('=== string', t => {
	t.throws(() => {
		throwif('string', '===', 'string');
	}, '"string" === "string"');
});

test('=== function', t => {
	t.throws(() => {
		const fun = () => {};
		throwif(fun, '===', fun);
	}, '"function fun() {}" === "function fun() {}"');
});

test('=== object', t => {
	t.throws(() => {
		throwif({one: 1}, '===', {one: 1});
	}, '{"one":1} === {"one":1}');
});

test('=== number', t => {
	t.throws(() => {
		throwif(42, '===', 42);
	}, '42 === 42');
});

test('=== boolean', t => {
	t.throws(() => {
		throwif(true, '===', true);
	}, 'true === true');
});

if (symbols) {
	test('=== symbol', t => {
		t.throws(() => {
			const sym = Symbol('foo');
			throwif(sym, '===', sym);
		}, '"Symbol(foo)" === "Symbol(foo)"');
	});
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// NOT EQUAL
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
test('!== string', t => {
	t.throws(() => {
		throwif('string01', '!==', 'string02');
	}, '"string01" !== "string02"');
});

test('!== function', t => {
	t.throws(() => {
		const fun1 = () => {};
		const fun2 = () => {};
		throwif(fun1, '!==', fun2);
	}, '"function fun1() {}" !== "function fun2() {}"');
});

test('!== object', t => {
	t.throws(() => {
		throwif({one: 1}, '!==', {two: 2});
	}, '{"one":1} !== {"two":2}');
});

test('!== number', t => {
	t.throws(() => {
		throwif(42, '!==', 442);
	}, '42 !== 442');
});

test('!== boolean', t => {
	t.throws(() => {
		throwif(true, '!==', false);
	}, 'true !== false');
});

if (symbols) {
	test('!== symbol', t => {
		t.throws(() => {
			const sym1 = Symbol('foo');
			const sym2 = Symbol('bar');
			throwif(sym1, '!==', sym2);
		}, '"Symbol(foo)" !== "Symbol(bar)"');
	});
}
