# throwif

> Super-compact syntax for your type checking and error throwing.

[![Build Status](https://travis-ci.org/radiovisual/throwif.svg?branch=master)](https://travis-ci.org/radiovisual/throwif) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/throwif/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/throwif?branch=master)
 
**Note:** This is currently in the beginning/experimental phases. Please [report any issues](https://github.com/radiovisual/throwif/issues) and use with caution. Pull requests welcome.

## Install

```
$ npm install --save throwif
```


## Usage

```js
const throwif = require('throwif');

throwif(str, '!== string');
//=> TypeError: Expected a string

throwif(500, '!<=', 99);
//=> Error: 500 !<= 99
```

## Why?

Instead of typing this:

```js
if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
}
```

You can just type this:

```js
throwif(str, '!== string');
```

Both blocks of code do the exact same thing (they throw the exact same error, if applicable), but throwif does the same with less code, while maintaining readability.


## API

### throwif(target, equalityOperator|typeofString, [object]);

#### target

Type: `string|number|object|function|symbol`

This is the item you want to evaluate for type, equality, etc.

#### equalityOperator

Type: `string`  

The string version of the equality operator want to use for your rule. You can show negation by prepending an exclamation point, which is not possible with certain comparison operators in JavaScript, but throwif makes this shortcut available on all comparison and equality operators. Only use operator strings when you want to check equality and comparison, for `typeof` operations (to check if an item is a certain type), use [typeofStr](https://github.com/radiovisual/throwif#typeofStr). 

- `'==='`
- `'!=='`
- `'>'`
- `'!>'`
- `'>='`
- `'!>='`
- `'<'`
- `'!<'`
- `'<='`
- `'!<='`

#### Equality Examples

```js
const throwif = require('throwif');

throwif('str', '!==', 'bar');
//=> Error: "foo" !== "bar"


throwif(42, '===', 42);
//=> Error: 42 === 42

throwif(500, '>', 100);
//=> Error: 500 > 100

throwif(100, '!<=', 99);
//=> Error: 100 !<= 99
```

#### typeofString

Type: `String`  
Format: `<equality-operator> <type>`  

Use this as a shorthand for the `typeof` operator.

#### `typeof` Examples

```js
const throwif = require('throwif');

const str = 'foo';

// Not Equal
throwif(str, '!=== string');
throwif(str, '!=== function');
throwif(str, '!=== number');
throwif(str, '!=== object');
throwif(str, '!=== symbol');
throwif(str, '!=== boolean');
throwif(str, '!=== undefined');

// Equal
throwif(str, '=== string');
throwif(str, '=== function');
throwif(str, '=== number');
throwif(str, '=== object');
throwif(str, '=== symbol');
throwif(str, '=== boolean');
throwif(str, '=== undefined');
```

## Known Limitations

- You can't use the equality string to check for `undefined`, you must use the `typeofStr`.
    ```js
    // not allowed
    throwif(str, '===', undefined);
    
    // use this instead
    throwif(str, '=== undefined');
    ```

- To check for equality between `Symbols`, the following cast takes place: `Object(Symbol()).toString();`. If you know of a better way to check equality for Symbols, please open an issue, or submit a pull request. 

## Related

- [detonate](https://github.com/radiovisual/detonate) Go boom! with a clean, compact syntax for your javascript type checking & error throwing.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
