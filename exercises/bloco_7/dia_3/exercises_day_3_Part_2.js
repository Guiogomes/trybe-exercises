const assert = require('assert');
// escreva a função addOne aqui

const addOne = (myArray) => {
	const receveArray = myArray;
	const addOneArray = [];
	for (let index = 0; index < receveArray.length; index += 1) {
		addOneArray.push(receveArray[index] + 1);		
	}
	return addOneArray;
}
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);



assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

const wordLengths = (words) => {
	const receveWords = words;
	const numberOfLetters = [];
	for (let index = 0; index < receveWords.length; index += 1) {
		numberOfLetters.push(receveWords[index].length);		
	}
	return numberOfLetters;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];
assert.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert.deepStrictEqual(output2, expected2);

const sumAllNumbers = (array) => {
	let sumNumbers =0;
	for (let index = 0; index < array.length; index += 1) {
		if (array[index] !== 'number'){
			sumNumbers += 0;
		}
		sumNumbers += array[index];		
	}
	return sumNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output3, expected3);

const findTheNeedle = (array, word) => {
	let position = 0;
	if (array.includes(word) !== true) {
		position = -1;
	}
	for (let index = 0; index < array.length; index += 1) {
		if (array[index] === word) {
			position = index;
			return
		}		
	}
	return position;
}

let wordsFindTheNeedle = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(wordsFindTheNeedle, 'needle');
assert.strictEqual(output4, expected4);

wordsFindTheNeedle = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(wordsFindTheNeedle, 'plant');
assert.strictEqual(output4, expected4);

wordsFindTheNeedle = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(wordsFindTheNeedle, 'plat');
assert.strictEqual(output4, expected4);