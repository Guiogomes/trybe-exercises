const readline = require('readline-sync');
const { randomNumber } = require('./randomNumber.js');

const whatIsYourNumber = readline.questionInt('Qual número você acha que será sorteado, entre 0 e 10? ')
// const randomNumber = () => (Math.random() * 10).toFixed(0);
const result = `O número sorteado foi: ${randomNumber().toFixed(0)}`;

module.exports = { result };