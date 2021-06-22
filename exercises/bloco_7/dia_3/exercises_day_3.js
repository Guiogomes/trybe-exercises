const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(5,3),8);

assert.strictEqual(sum(0,0),0);

assert.strictEqual(sum(5,4),9);

assert.strictEqual(sum(5,3),8);

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
	return newArr;
}
// implemente seus testes aqui
// assert.deepStrictEqual(myRemove([1,2,3,4,5],3),[1,2,4,5]);

// assert.deepStrictEqual(myRemove([1,2,3,4,5],3),[1,2,3,4,5]);

assert.deepStrictEqual(myRemove([1,2,3,4,5],6), [1,2,3,4,5]);

// assert.deepStrictEqual(myRemove([1,2,3,4,5],3)); 

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
// assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3), [1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],2), [1,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],5), [1,2,3,4]);

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
// assert.strictEqual(myFizzBuzz(14), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz('3'), 'fizz');


const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1,obj2);
assert.deepStrictEqual(obj1,obj3);