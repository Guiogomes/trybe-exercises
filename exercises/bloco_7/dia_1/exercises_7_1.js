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

function testingScope(escopo) {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens.sort);