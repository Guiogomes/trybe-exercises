const users = {
	4: { name: 'Mark' },
	5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserNameAsyncAwait = (userID) => {
	return findUserById(userID).then(user => user.name)
	.catch(msg => msg);
};

module.exports = {
	users,
	findUserById,
	getUserNameAsyncAwait,
}