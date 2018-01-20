const Sequelize = require('Sequelize');
const db = require('../db');

const Cart = db.define('cart', {
	purchasePrice: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: true
	}
})


module.exports = Cart;