var Sequelize = require('sequelize');
var db = require('./_db');

var Comment = db.define('comment', {
	text: {
		type: Sequelize.STRING(1600),
		allowNull: false,
	},
	score: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false
	}
});

module.exports = Comment;