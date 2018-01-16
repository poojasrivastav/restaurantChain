const Sequelize = require('Sequelize');
const db = require('../db');

const Product = db.define('product', {

	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.TEXT
	},
	image: {
		type: Sequelize.STRING,
		defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Download_%2853%29.jpg'

	},
	price: {
		type: Sequelize.INTEGER,
		defaultValue: 5.00,
		validate: {
			min: 1,
			max: 100
		}
	}
})