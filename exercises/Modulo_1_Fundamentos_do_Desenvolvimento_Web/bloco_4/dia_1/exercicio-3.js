// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let num1 = 30;
let num2 = 15;
let num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log (num1)
} else if (num2 > num1 && num2 > num3) {
    console.log (num2)
} else if (num3 > num1 && num3 > num2) {
    console.log (num3)
} else {
    console.log ('Não é possível apontar um número')
}