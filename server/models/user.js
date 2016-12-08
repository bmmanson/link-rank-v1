var Sequelize = require('sequelize');
var db = require('./_db');

var User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	facebookId: {
		type: Sequelize.STRING,
		allowNull: false
	},
	score: {
		type: Sequelize.INTEGER
	}
})

module.exports = User;