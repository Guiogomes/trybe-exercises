// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = 'rainha';

switch (pecaXadrez) {
    case 'peão': 
        console.log ('Move para frente e tira outras peças na diagonal frontal');
        break;
    case 'torre':
        console.log ('Move para frente e para os lados em linha reta, tira peças na mesma lógica.');
        break;
    case 'bispo': 
        console.log ('Move em diagonal, tira peças em diagonal no sentido frontal de movimento');
        break;
    case 'cavalo':
        console.log ('Faz movimentos no formato de um L, andando sempre duas casas em sentido frontal e uma em sentido lateral. Tira a peça que estiver no final do trajeto.');
        break;
    case 'rainha':
        console.log ('é só a peça mais roubada do jogo, não sei quem inventou que tinha necessidade de rei, ela sozinha conquistava qualquer coisa.');
        break;
    case 'rei': 
        console.log ('anda pouco, faz pouco e num ajuda em nada, só serve pra te fazer perder o jogo e passar raiva.');
        break;
    default:
        console.log ('essa aí num tá entre as peças não, mas pode pesquisar de novo :D');

    
}