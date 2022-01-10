const readline = require('readline-sync');

const name = readline.question('What`s your name? ');
const age = readline.questionInt('What`s your age? ');
const height = readline.questionFloat('What`s your height? ');
const weight = readline.questionFloat('What`s your weight? ');
const IMC = Math.round((weight/Math.pow(height, 2))* 100)/100;
const personImc = `Hello ${name}, your IMC is ${IMC}`;

module.exports = { personImc };