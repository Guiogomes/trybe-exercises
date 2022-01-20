// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos
// não seja um número, rejeite a Promise com o
// motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos,
// some os dois primeiros e multiplique o resultado
// pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com
//o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com
// o valor obtido.

const calculator = (param1, param2, param3) => {
	return new Promise((resolve, reject) => {
		if(typeof param1 !== Number
			|| typeof param2 !== Number
			|| typeof param3 !== Number) reject(new Error('Informe apenas números'));

	})
}