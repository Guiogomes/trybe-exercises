const encode = require('../encode');

describe('Casos de teste para a função encode', () => {
	test('teste se encode é uma função', () => {
		expect(encode.encode('string')).toBeDefined();
	});
	test('teste se passando uma palavra com "a" ela tem o comportamento esperado', () => {
		expect(encode.encode('arara')).toBe('1r1r1');
	});
	test('teste se passando uma palavra com "e" ela tem o comportamento esperado', () => {
		expect(encode.encode('elena')).toBe('2l2n1');
	});
	test('teste se passando uma palavra com "i" ela tem o comportamento esperado', () => {
		expect(encode.encode('ivan')).toBe('3v1n');
	});
	test('teste se passando uma palavra com "o" ela tem o comportamento esperado', () => {
		expect(encode.encode('ovo')).toBe('4v4');
	});
	test('teste se passando uma palavra com "u" ela tem o comportamento esperado', () => {
		expect(encode.encode('urubu')).toBe('5r5b5');
	});
});

describe('Casos de erro para a função encode', () => {
	test('caso a função não receba parâmetros ela retorne erro', () => {
		expect(() => {encode.encode()}).toThrow();
	});
	test('caso a função retorne erro que a mensagem seja "Parâmetro deve ser uma string"', () => {
		expect(() => {encode.encode()}).toThrowError(new Error('Parâmetro deve ser uma string'));
	});
});