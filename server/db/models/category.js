const Sequelize = require('Sequelize');
const db = require('../db');

const Category = db.define('category', {
	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.TEXT
	},
	image: {
		type: Sequelize.STRING,
		defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Download_%2853%29.jpg'
	}
})

module.exports = Category;