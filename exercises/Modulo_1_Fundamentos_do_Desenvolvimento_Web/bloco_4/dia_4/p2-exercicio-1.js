// Crie uma função que receba uma string e retorne true se for um palíndromo , 
// ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


//o que eu preciso fazer:

//criar uma funçao que verifica um palindromo

//o que é um Palindromo: palavra ou frase que lida da direita pra esquerda ou da esquerda
//pra direita tem o mesmo entendimento.

//primeira coisa: verificar se a palavra é um palindromo.
//criar uma forma de passar pelas letras nos dois sentidos
//vendo se a leitura é igual pros dois lados
let check = 'arara';
let reverseWord = '';

function checkPalindrome (word){
for (let contador = 0; contador < word.length; contador +=1){
    if (word[contador] === word[(word.length - 1) - contador]){
        reverseWord += word[(word.length-1)-contador];
    } else {
        return false;
    } 
    
}
return true;
}

console.log (checkPalindrome(check));



//preciso de algo para armazenar a palavra

//preciso percorrer a palavra nos dois sentidos

//comparar se os sentidos tem simetria

//segunda coisa: printar se ela é ou não um palindromo


