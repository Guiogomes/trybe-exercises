const script = require('../script');

describe('Teste os casos de funcionamento da função sum', () => {
	test('Teste se o retorno de sum com os parâmetros 4 e 5 é 9', () => {
		expect(script.sum(4, 5)).toEqual(9);
	});
	test('Teste se o retorno de sum com ambos os parâmetros sendo 0 tem o retorno igual a 0', () => {
		expect(script.sum(0, 0)).toEqual(0);
	});
	test('Testa se a função lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
		expect(() => {script.sum(4, '5')}).toThrow();
	});
	test('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada de "sum(4,"5")"', () => {
		expect(() => {script.sum(4, '5')}).toThrow('parameters must be numbers');
	});
});

describe('Teste os casos de funcionamento da função myRemove', () => {
	test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
		expect(script.myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
	});
	test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		expect(script.myRemove([1, 2, 3, 4], 3)).not.toContain([1,2,3,4]);
	});
	test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
		expect(script.myRemove([1,2,3,4])).toEqual([1,2,3,4])
	});
	test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
		expect(script.myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
	});
});

describe('Teste os casos de funcionamento da função myRemoveWithoutCopy', () => {
	it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
		expect(script.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1,2,4])
	});
	it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		expect(script.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});
	it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
		expect(script.myRemoveWithoutCopy([1, 2, 3, 4], 4)).toEqual([1,2,3]);
	});
	it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
		expect(script.myRemoveWithoutCopy([1,2,3,4], 5)).toEqual([1,2,3,4]);
	});
});

describe('Teste os casos de funcionamento da função fizzbuzz', () => {
	test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
		expect(script.myFizzBuzz(15)).toBe('fizzbuzz');
	});
	test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
		expect(script.myFizzBuzz(9)).toBe('fizz');
	});
	test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
		expect(script.myFizzBuzz(10)).toBe('buzz');
	});
	test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
		expect(script.myFizzBuzz(13)).toBe(13);
	});
	test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
		expect(script.myFizzBuzz('3')).toEqual(false);
	});
});

describe('Implemente os casos de comparação entre os obj1, ob2 e obj3', () => {
	test('Teste se o obj1 é idêntico ao obj2', () => {
		expect(script.obj1).toEqual(script.obj2);
	});
	test('Teste se o obj1 não é idêntico ao obj3', () => {
		expect(script.obj1).not.toEqual(script.obj3);
	});
	test('Teste se o obj2 não é idêntico ao obj3', () => {
		expect(script.obj2).not.toEqual(script.obj3);
	});
});