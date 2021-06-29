const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
	const countA = names
		.reduce((accumulator, currentValue) => 
			accumulator + currentValue.split('').reduce((count, index) =>
			(index === 'A' || index === 'a') ? count + 1 : count, 0),0);
		return countA;
}
containsA()
assert.deepStrictEqual(containsA(), 20)