// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 0;

for (valor=0; valor < numbers.length; valor +=1) {
    if (numbers[valor] > menorNumero){
        menorNumero += numbers[valor];
    } else if (menorNumero < numbers){
         menorNumero+=numbers;
    }
}
       
console.log (menorNumero);
