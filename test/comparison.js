import test from 'ava';
import throwif from './../lib/index.js';

test('>', t => {
	t.throws(() => {
		throwif(5, '>', 3);
	}, '5 > 3');
});

test('>=', t => {
	t.throws(() => {
		throwif(5, '>=', 5);
	}, '5 >= 5');
});

test('!>=', t => {
	t.throws(() => {
		throwif(3, '!>=', 5);
	}, '3 !>= 5');
});

test('!>', t => {
	t.throws(() => {
		throwif(3, '!>', 5);
	}, '3 !> 5');
});

test('<', t => {
	t.throws(() => {
		throwif(5, '<', 10);
	}, '5 < 10');
});

test('<=', t => {
	t.throws(() => {
		throwif(5, '<=', 5);
	}, '5 <= 5');
});

test('!<=', t => {
	t.throws(() => {
		throwif(3, '!<=', 2);
	}, '3 !<= 2');
});

test('!<', t => {
	t.throws(() => {
		throwif(100, '!<', 0);
	}, '100 !< 0');
});
