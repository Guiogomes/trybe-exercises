const readlineSync = require("readline-sync");
import { Meses } from './meses';
import { EstacoesDoAno } from './estacoesDoAno';

const meses = Object.keys(Meses);
const index = readlineSync.keyInSelect(meses, 'Select a month');

if (index === 1 || index === 2 || index === 12) {
  console.log(`A estação do ano é ${EstacoesDoAno.verao}`);
} else if (index === 3 || index === 4 || index === 5) {
  console.log(`A estação do ano é ${EstacoesDoAno.outono}`);
} else if (index === 6 || index === 7 || index === 8) {
  console.log(`A estação do ano é ${EstacoesDoAno.inverno}`);
} else {
  console.log(`A estação do ano é ${EstacoesDoAno.primavera}`);
}