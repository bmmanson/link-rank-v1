var Sequelize = require('sequelize');
var db = require('./_db');

var CommentPoint = db.define('commentpoint', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
});

module.exports = CommentPoint;