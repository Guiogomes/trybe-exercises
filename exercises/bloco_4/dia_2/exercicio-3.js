// Para o terceiro exercício, calcule e imprima a 
// média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for (let soma = 0; soma < numbers.length; soma +=1) {
    somaNumbers=numbers[soma] + somaNumbers;
    
}
let mediaAritimetica = somaNumbers / numbers.length;

console.log (mediaAritimetica);