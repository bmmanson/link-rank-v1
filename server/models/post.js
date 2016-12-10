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
	text: {
		type: Sequelize.STRING,
		defaultValue: ""
	},
	score: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	numberOfComments: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	rank: {
		type: Sequelize.INTEGER
	}
})

module.exports = Post;