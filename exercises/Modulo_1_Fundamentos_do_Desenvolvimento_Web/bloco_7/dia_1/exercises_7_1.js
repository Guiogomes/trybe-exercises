function testingScope(escopo) {
	if (escopo === true) {
		var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
		console.log(ifScope);
	} else {
		var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
	console.log(`${ifScope} o que estou fazendo aqui ?`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

function testingScopeNewSetup(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScopeNewSetup(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens.sort((odd,evens) => odd - evens));

console.log(oddsAndEvens.sort((odd,evens) => evens - odd));

const fatorialOfANumber = (number) => (number === 1)? 1 : number*fatorialOfANumber(number - 1);
console.log(fatorialOfANumber(4));

const searchBigWord = (string) => {
	const receveString = string;
	const arrayString = receveString.split(' ');
	let bigWord = '';
	for (let index = 0; index < arrayString.length; index += 1) {
		if (bigWord.length > arrayString[index].length) {
			bigWord = arrayString[index];
		} 
	}
}

const array = ['ovo', 'maça', 'manga'];
const item = array[0];
console.log (item);