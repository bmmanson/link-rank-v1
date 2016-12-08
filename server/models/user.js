var Sequelize = require('sequelize');
var db = require('./_db');

var User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	facebookId: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	score: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	}
})

module.exports = User;