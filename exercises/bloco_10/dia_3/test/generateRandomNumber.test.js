let generateRandomNumbers = require('../generateRandomNumber');

describe('Behavior of the function generateRandomNumbers', () => {
	generateRandomNumbers = jest
		.fn()
		.mockReturnValue(10)
	test('Verify with the function has been called', () => {
		generateRandomNumbers();
		expect(generateRandomNumbers).toHaveBeenCalled();
	});
	test('Verify if called generateRandomNumbers with mockValue if he has 10 with value', () => {
		expect(generateRandomNumbers()).toBe(10);
	});
	test('Verify number of times is the generateRandomNumbers has been called', () => {
		expect(generateRandomNumbers).toHaveBeenCalledTimes(2)
	});
});