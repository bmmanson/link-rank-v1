var Sequelize = require('sequelize');
var db = require('./_db');

var PostPoint = db.define('postpoint', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
});

module.exports = PostPoint;