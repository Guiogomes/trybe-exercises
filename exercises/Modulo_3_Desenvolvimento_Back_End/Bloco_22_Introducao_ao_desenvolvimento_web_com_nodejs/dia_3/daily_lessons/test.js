const { expect } = require('chai');
const calculaSituacao = require('./index.js');

describe('testes de implementação da função "calculaSituacao"', () => {
	it('Quando a média for menor que 7 retorna "reprovado"', () => {
		const resposta = calculaSituacao(4);
		expect(resposta).to.be.equals('reprovado');
	});
	it('Quando a média for maior que 7 retorna "aprovado"', () => {
		const resposta = calculaSituacao(9);
		expect(resposta).to.be.equals('aprovado');
	});
	it('Quando a média for igual a 7 retorna "aprovado"', () => {
		const resposta = calculaSituacao(7);
		expect(resposta).to.be.equals('aprovado');
	});
});