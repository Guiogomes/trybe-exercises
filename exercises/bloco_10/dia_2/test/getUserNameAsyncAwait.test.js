const { getUserNameAsyncAwait } = require('../getUserNameAsyncAwait');


describe('Successful cases of the function getUserName', () => {	
	it('expects that passing 4 as string the function will behave as expected', async() => {
		await expect(getUserNameAsyncAwait('4')).resolves.toBe('Mark');
	});
	it('expects that passing 5 as string the function will behave as expected', async () => {
		await expect(getUserNameAsyncAwait('5')).resolves.toBe('Paul');
	});
	it('expects that passing 4 as number the function will behave as expected', async () => {
		await expect(getUserNameAsyncAwait(4)).resolves.toBe('Mark');
	});
	it('expects that passing 5 as number the function will behave as expected', async () => {
		await expect(getUserNameAsyncAwait(5)).resolves.toBe('Paul');
	});
});

describe('Failure cases of the function getUserName', () => {
	it('Throw error with a invalid parameter', async () => {
		try {
			getUserNameAsyncAwait('xablau')
		} catch (error) {
			expect(error).toEqual({ error: 'User with xablau not found.' })
		}
	});
});