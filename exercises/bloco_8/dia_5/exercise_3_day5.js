const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const {name: personName, age: personAge, likes: personLike} = alex;
const {name, age, likes} = gunnar;
const personLikes = (args1, args2, args3) => `${args1} is ${args2} years old and likes ${args3.join(', ')}.`;

assert.strictEqual(personLikes(personName, personAge, personLike), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(name, age, likes), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');