const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mexirica', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'morango', 'iogurte'];

const fruitSalad = (fruit, additional) => {
  const mixFruits = [...fruit, ...additional];
	return mixFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 100, 213, 14, 35,-321)); // 88

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

console.log(Object.values(product));

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {a: person , b: room, c: schoolSubjects} = student

console.log (`${person} estuda na ${room} e está tendo aula de ${schoolSubjects}`);

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

const saudacoes = ['Olá', (saudacao) => saudacao];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [greetings, continueGreetings] = saudacoes;
console.log(`${greetings} ${continueGreetings('Gui')}`);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const values =[comida,animal,bebida];
const [animalRigth, bebidaRigth, comidaRight] = values;
console.log (animalRigth)
console.log (bebidaRigth)
console.log (comidaRight)

const getPosition = (latitude, longitude) => (
	{latitude,longitude});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'usuário') => `Welcome ${user}!`;

console.log(greeting()); // Welcome undefined!

const multiply = (number = 1, value = 1) => number * value;

console.log(multiply(8, 4));