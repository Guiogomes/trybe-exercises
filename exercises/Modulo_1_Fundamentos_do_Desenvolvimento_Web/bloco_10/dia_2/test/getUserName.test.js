const { getUserName } = require('../getUserName');

describe('Successful cases of the function getUserName', () => {	
	it('expects that passing 4 as string the function will behave as expected', () => {
		expect.assertions(1);
		return expect(getUserName('4')).resolves.toBe('Mark');
	});
	it('expects that passing 5 as string the function will behave as expected', () => {
		expect.assertions(1);
		return expect(getUserName('5')).resolves.toBe('Paul');
	});
		it('expects that passing 4 as number the function will behave as expected', () => {
		expect.assertions(1);
		return expect(getUserName(4)).resolves.toBe('Mark');
	});
	it('expects that passing 5 as number the function will behave as expected', () => {
		expect.assertions(1);
		return expect(getUserName(5)).resolves.toBe('Paul');
	});
});

describe('Failure cases of the function getUserName', () => {
	it('Throw error with a invalid parameter', () => {
		return getUserName('xablau').catch(error => {
			// expect.assertions(1);
			expect(error).toEqual({ error: 'User with xablau not found.' })
		});
	});
});