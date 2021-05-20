let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0; 
for (let soma = 0; soma < numbers.length; soma +=1) {
    somaNumbers=numbers[soma] + somaNumbers;
    let mediaAritimetica = somaNumbers / numbers.length;
    if (mediaAritimetica > 20) {
        console.log ('valor maior que 20.');
    } else {
        console.log ('valor menor ou igual a 20.')
    }
}