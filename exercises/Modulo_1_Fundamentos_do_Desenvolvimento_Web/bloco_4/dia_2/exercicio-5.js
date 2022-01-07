let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (valor = 0; valor < numbers.length; valor +=1){
    if (numbers[valor] > maiorNumero){
        maiorNumero = numbers[valor];
        
    }   
   
}
console.log (maiorNumero);