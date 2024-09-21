# Random Number From Ranges

> Generate a random number from an array of number ranges

## Installation

To add this library to your project run the following command:

```sh
$ npm install random-from-ranges
```

Or if you prefer using Yarn:

```sh
$ yarn add random-from-ranges
```

## Usage

```js
// Produces 1, 2, 3, 20, 21, 22, or 23
const myNum = randomFromRanges([[1, 3], [20, 23]])
```

Ranges must be positive, where the first number is less than the second number of the range, e.g. `[3, 1]` is invalid while `[1, 3]` is valid.

Ranges must not overlap, e.g. `[[1, 3], [2, 6]]` is invalid while `[[1, 3], [5, 6]]` is valid.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
