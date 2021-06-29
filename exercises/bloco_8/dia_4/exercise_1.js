const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const groupArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
	return groupArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

