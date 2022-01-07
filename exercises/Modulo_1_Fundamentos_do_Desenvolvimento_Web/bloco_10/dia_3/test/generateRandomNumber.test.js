let generateRandomNumbers = require('../generateRandomNumber');

describe('Behavior of the function generateRandomNumbers', () => {
	generateRandomNumbers = jest
		.fn()
	
	test('Verify with the function has been called', () => {
		generateRandomNumbers();
		expect(generateRandomNumbers).toHaveBeenCalled();
	});
	test('Verify if called generateRandomNumbers with mockValue if he has 10 with value', () => {
		generateRandomNumbers.mockReturnValue(10);
		expect(generateRandomNumbers()).toBe(10);
	});
	test('Verify number of times is the generateRandomNumbers has been called', () => {
		expect(generateRandomNumbers).toHaveBeenCalledTimes(2)
	});
});

describe('Behavior of the function generateRandomNumber with mock cases with pass parameters from her', () => {
	test ('Expect with mock format the function generateRandomNumbers show a division result with the parameters', () => {
		generateRandomNumbers.mockImplementation((number1, number2) => number1 / number2);
		expect(generateRandomNumbers(4,2)).toBe(2);
	});
});