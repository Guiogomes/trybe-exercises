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