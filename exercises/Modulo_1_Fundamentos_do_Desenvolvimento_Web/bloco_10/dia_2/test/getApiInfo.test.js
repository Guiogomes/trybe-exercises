const fetch = require('node-fetch');
const getRepos = require('../getApiInfo')
const gitUrl = 'https://api.github.com/orgs/tryber/repos';

describe('Sucessful cases of the function getRepos', () => {
	it ('should a sucessful match searching for sd-01-week4-5-project-todo-list', async () => {
		const sucessTest = await getRepos(gitUrl);
		expect(sucessTest.find(test => test === 'sd-01-week4-5-project-todo-list')).toBeTruthy();
	});
	it ('should a sucessful match searching for sd-01-week4-5-project-meme-generator', async () => {
		const sucessTest = await getRepos(gitUrl);
		expect(sucessTest.find(test => test === 'sd-01-week4-5-project-meme-generator')).toBeTruthy();
	});
});