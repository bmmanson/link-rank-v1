var Sequelize = require('sequelize');
var db = require('./_db');
var Promise = require('bluebird');
var Post = require('./post');
//update number of comments in row of post table that corresponds to comment

//1. get number of comments
//2. get post
//3. update

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
}, {
	hooks: {
		afterCreate: function (comment, options) {
			var getCommentsWithMatchingPostId = Comment.findAll({
				where: {
					postId: comment.postId
				}
			});
			
			var getPostWithMatchingId = Post.findById(comment.postId);

			Promise.all([
				getCommentsWithMatchingPostId,
				getPostWithMatchingId
			])
			.spread(function (comments, post) {
				console.log("NUMBER OF COMMENTS", comments.length);
				return post.update({numberOfComments: comments.length});
			});
		},
		afterDestroy: function (postPoint, options) {
			var getCommentsWithMatchingPostId = Comment.findAll({
				where: {
					postId: comment.postId
				}
			});
			
			var getPostWithMatchingId = Post.findById(comment.postId);

			Promise.all([
				getCommentsWithMatchingPostId,
				getPostWithMatchingId
			])
			.spread(function (comments, post) {
				console.log("NUMBER OF COMMENTS", comments.length);
				return post.update({numberOfComments: comments.length});
			});
		}
	}
});

module.exports = Comment;