// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um 
// triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 20;
let angulo2 = 50;
let angulo3 = 'banana';
let anguloTriangulo = angulo1 + angulo2 + angulo3;

if (anguloTriangulo === 180){
    console.log (true);
} else if (typeof anguloTriangulo  === 'number' && anguloTriangulo != 180){
    console.log (false);
} else {
    console.log ('erro')
}