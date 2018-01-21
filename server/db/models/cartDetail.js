const Sequelize = require('Sequelize');
const db = require('../db');

const CartDetail = db.define('cartDetail', {

totalAmount: {
	type: Sequelize.INTEGER,
	allowNull: false
}

})

module.exports = CartDetail;