const connection = require('./connection');

const getAllUsers = async () => {
	const [users] = await connection.execute(
		'SELECT * FROM model_example.users;'
	);
	return users;
}

const getUserById = async (id) => {
	const [user] = await connection.execute(
		`SELECT * FROM model_example.users
		WHERE id = ?`, [id]
	);
	
	return user;
}

const validateUser = (name, lastName, password, email) => {
	if (!name || !lastName || !password || !email) return false;
	if (password.length < 6 || typeof password !== 'string') return {
		"error": true,
		"message": "O campo 'password' deve ter pelo menos 6 caracteres"
	};
	return true;
}

const createUser = async (name, lastName, password, email) => {
	const newUser = await connection.execute(
		'INSERT INTO model_example.users (name, last_name, password, email) VALUES (?, ?, ?, ?);',
		[name, lastName, password, email],
	)
	return newUser;
};

const updateUser = async (id, name, lastName, password, email) => {
	const userUpdated = await connection.execute(
		`UPDATE model_example.users
		SET name = ?, last_name = ?, password = ?, email = ?
		WHERE id = ?`,
		[name, lastName, password, email, id],
	)
	return userUpdated;
};

module.exports = {
	getAllUsers,
	validateUser,
	createUser,
	getUserById,
	updateUser,
}