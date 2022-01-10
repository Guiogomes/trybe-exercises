const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância (em metros)? ');
const time = readline.questionInt('Qual tempo (em segundos)? ');
const averageSpeed = distance / time;

const average = `A velocidade média é de ${averageSpeed}`;
module.exports = { average }