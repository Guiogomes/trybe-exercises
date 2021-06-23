const sum = (a, b) => a + b;

console.log(sum(3,4));

const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 0);

// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const button = document.getElementById('signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(20, isEven); // Testa quais números serão pares;
repeat(20, isOdd); // Testa quais números serão ímpares;

const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
