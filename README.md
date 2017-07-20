# promised-method
[![Build Status](https://travis-ci.org/Brightspace/node-promised-method.svg?branch=master)](https://travis-ci.org/Brightspace/node-promised-method) [![Coverage Status](https://coveralls.io/repos/github/Brightspace/node-promised-method/badge.svg?branch=master)](https://coveralls.io/github/Brightspace/node-promised-method?branch=master)

Turns a function into one that always returns a Promise a la Blubird's
Promise.method.

## Usage

```js
'use strict';

const promised = require('promised-method');

function Clazz() {}

Clazz.prototype.foo = promised(function(arg) {
	if (!arg) {
		throw new Error('need an arg!');
	}

	// ...
});

```

## Testing

```bash
npm test
```

## Contributing

1. **Fork** the repository. Committing directly against this repository is
   highly discouraged.

2. Make your modifications in a branch, updating and writing new unit tests
   as necessary in the `test` directory.

3. Ensure that all tests pass with `npm test`

4. `rebase` your changes against master. *Do not merge*.

5. Submit a pull request to this repository. Wait for tests to run and someone
   to chime in.

### Code Style

This repository is configured with [EditorConfig][EditorConfig] and
[ESLint][ESLint] rules.

[EditorConfig]: http://editorconfig.org/
[ESLint]: http://eslint.org
