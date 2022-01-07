const readline = require('readline-sync');

const yourName = readline.question('Qual seu nome? ');
const yourAge = readline.questionInt('Qual a sua idade? ')

console.log(`Hello, ${yourName}! You are ${yourAge} years old!`);