const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
		author: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		pageQuantity: {
			type: DataTypes.STRING,
		},
    title: {
			allowNull: false,
			type: DataTypes.STRING,
		}
  },
  {
    underscored: true,
    tableName: 'Books',
  });

  return Books;
};

module.exports = Books;