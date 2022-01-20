const readline = require('readline-sync');
const imc = require('./calcIMC');
const avgSpeed = require('./averageCar');
const resultado = require('./resultado');

const options = [imc, avgSpeed, resultado];

const chose = readiline.keyInSelect( options, 'Escolha uma opção (1 - imc, 2 - avgSpeed, 3 - resultado): ');
