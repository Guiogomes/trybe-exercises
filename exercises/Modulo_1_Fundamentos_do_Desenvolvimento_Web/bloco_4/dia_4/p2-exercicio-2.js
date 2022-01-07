// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// percorrer o array
//descobrir o maior número do array
//mostrar em qual posiçao ele está
//imprimir a posição
let array = [2, 3, 6, 7, 10, 12, 1];

function discoverIndex (teste){
let indiceMaiorNumero = 0;
    for (let index = 0; index<teste.length; index +=1){
    
      if (teste[indiceMaiorNumero] < teste[index]){
        indiceMaiorNumero = index;
    }
    
       
}
    return indiceMaiorNumero;
}

console.log (discoverIndex(array));