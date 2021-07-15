const uppercase = require('../uppercase');

describe('Tests of proper functioning of the functionuppercase', () => {
	it('Tests if the incoming callback turns the text into uppercase', () => {
		uppercase('amor', () => {
			expect('amor'.toUpperCase()).toBe('AMOR');
		});
	});	
})