const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
	let greetingPeople = [];
  for (const person in people) {
    greetingPeople.push(`${greeting}${people[person]}`)
  }
	return greetingPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

const removeVowels = (word) => {
  const characters = word.split('');
  let count = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
			count += 1;
      characters.replace(/characters[index]/g, count);
    } 
  }
  return characters;
};

const parameter1 = 'Dayane';
const result1 = 'D1y2n3';

assert.strictEqual(removeVowels(parameter1), result1);