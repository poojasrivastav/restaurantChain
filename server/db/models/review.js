const Sequelize = require('Sequelize');
const db = require('../db');

const Review = db.define('review', {
  message: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  rating: {
  	type: Sequelize.INTEGER,
  	allowNull: false,
  	validate: {
  		min: 0,
  		max: 5
  	}
  }

})
module.exports = Review;