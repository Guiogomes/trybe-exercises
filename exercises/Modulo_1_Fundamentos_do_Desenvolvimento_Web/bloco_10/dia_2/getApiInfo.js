const fetch = require('node-fetch');

const gitUrl = 'https://api.github.com/orgs/tryber/repos'

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = getRepos;