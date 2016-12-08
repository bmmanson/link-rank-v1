var Sequelize = require('sequelize');
var db = require('./_db');

var Comment = db.define('comment', {
	text: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Comment;