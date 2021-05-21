// Utilizando o array criado no exercício anterior imprima o 
// resultado da divisão de cada um dos elementos por 2 .

let numeros = [];
for (let num = 1; num <= 25; num +=1){
    let valor = num;
    if (num <= 25){
        numeros.push (valor);
    }
}
for (let div = 0; div < numeros.length; div +=1){
    let resultadoDivisao = numeros[div]/2;
    console.log (resultadoDivisao);
}

