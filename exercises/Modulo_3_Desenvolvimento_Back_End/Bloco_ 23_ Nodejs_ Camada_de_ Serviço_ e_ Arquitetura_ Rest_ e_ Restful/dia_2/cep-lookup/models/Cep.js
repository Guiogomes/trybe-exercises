const connection = require('./connection');

const getEspecificCep = async (cep) => {
	const [selectCep] = await connection.execute(
		`SELECT * FROM cep_lookup
		WHERE cep = ?`,
		[cep]
	)
	return selectCep;
}