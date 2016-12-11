var Sequelize = require('sequelize');
var Promise = require('bluebird');
var Post = require('./post');
var Comment = require('./comment');
var db = require('./_db');

//1. get:
	//the number of comments with id matching postId on postPoint
	//and the number of upvotes 
	//the post whose id matches the updated postpoint's id
//2. update score

var PostPoint = db.define('postpoint', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
}, {
	hooks: {
		afterCreate: function (postPoint, options) {
			var getCommentsWithMatchingPostId = Comment.findAll({
				where: {
					postId: postPoint.postId
				}
			});
			var getNumberOfUpvotesForPost = PostPoint.findAll({
				where: {
					postId: postPoint.postId
				}
			});
			
			var getPostWithMatchingId = Post.findById(postPoint.postId);

			Promise.all([
				getCommentsWithMatchingPostId,
				getNumberOfUpvotesForPost,
				getPostWithMatchingId
			])
			.spread(function (comments, points, post) {
				return post.update({score: comments.length + points.length});
			});
		},
		afterDestroy: function (postPoint, options) {
			var getCommentsWithMatchingPostId = Comment.findAll({
				where: {
					postId: postPoint.postId
				}
			});
			var getNumberOfUpvotesForPost = PostPoint.findAll({
				where: {
					postId: postPoint.postId
				}
			});
			
			var getPostWithMatchingId = Post.findById(postPoint.postId);

			Promise.all([
				getCommentsWithMatchingPostId,
				getNumberOfUpvotesForPost,
				getPostWithMatchingId
			])
			.spread(function (comments, points, post) {
				return post.update({score: comments.length + points.length});
			});
		}
	}
});

module.exports = PostPoint;