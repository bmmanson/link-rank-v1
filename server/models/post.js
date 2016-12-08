var Sequelize = require('sequelize');
var db = require('./_db');

var Post = db.define('post', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	url: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING
	}
})

module.exports = Post;