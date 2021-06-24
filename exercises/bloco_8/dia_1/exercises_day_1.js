// 1 - Crie uma função que retorne um objeto no formato 
// { nomeCompleto, email } representando uma nova pessoa 
// contratada. Passe sua função como parâmetro da HOF 
// newEmployees para criar cada pessoa contratada em 
// seu respectivo id . A sua função deve receber como 
// parâmetro o nome completo da pessoa funcionária e a
// partir dele gerar automaticamente um email no 
// formato nome_da_pessoa@trybe.com.

const generateDate = (name) => {
	const createPerson ={
		nomeCompleto: name,
		email: `${name.toLowerCase().replaceAll(' ', '_')}@trybe.com`,
	};
	return createPerson;
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }	
	return employees;
};
console.log(newEmployees(generateDate));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como 
// parâmetros o número apostado e uma função que checa se o número 
// apostado é igual ao número sorteado. O retorno da sua HOF deve ser 
// uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const compare = (number) => {
		if (number === Math.floor(Math.random()*6)) {
			console.log('Parabéns você ganhou');
		} else {
			console.log('Tente novamente');
		}
}

const resultBet = (number, callback) => {
	if (typeof(number)!== 'number') {
		console.log('Não é possível analisar o resultado sem um número.');
		return;
	}	
	return callback(number);
}

resultBet(5, compare);

// 3 - Crie uma HOF que receberá três parâmetros. 
// O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas 
// (respostas da pessoa estudante) e o terceiro é uma função que 
// checa se as respostas estão corretas e faz a contagem da pontuação 
// final recebida pela pessoa estudante. Ao final a HOF deve retornar 
// o total da contagem de respostas certas. Quando a resposta for correta
// a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e 
// quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const	gabarite = (aswers, template) => {		
	let sucessNotes = 0;
	for (let index = 0; index < aswers.length; index += 1) {
		let aswer = aswers[index];
		if (aswer === 'N.A') {
			sucessNotes += -0.5;
		}	
		for (let index2 = 0; index2 < template.length; index += 1) {
			let rightAswer = template[index];
			if (aswer === rightAswer) {
				sucessNotes += 1;
				break;
			} else {
				sucessNotes += 0;
				break;
			}	
		}
	}
	return sucessNotes;
}
// console.log(gabarite(studentAnswers, rightAnswers));

const notes = (aswers, template, callback) => {
	return callback(aswers,template);
}

console.log(notes(studentAnswers, rightAnswers, gabarite));