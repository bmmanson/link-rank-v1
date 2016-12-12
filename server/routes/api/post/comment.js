var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var User = require('./../../../models/user');
var Comment = require('./../../../models/comment');
var CommentPoint = require('./../../../models/comment-point');
var router = express.Router();

router.get('/:id', function (req, res, next) {
	Comment.findAll({
		where:
			{
			postId: req.params.id
			},
		include: 
			[
				{
				model: User,
				as: 'author'
				}
			]
	})
	.then(function (comments) {
		res.json(comments);
	}).catch(next);
});

router.post('/new', function (req, res, next) {
	Comment.create({
		authorId: req.body.authorId,
		parentId: req.body.parentId,
		postId: req.body.postId,
		text: req.body.text
	})
	.then(function (comment) {
		return Comment.findOne({
			where:
				{
					id: comment.id
				},
			include: 
				[
					{
					model: User,
					as: 'author'
					}
				]
		});
	})
	.then(function (comment) {
		res.json(comment);
	}).catch(next);
});

router.post('/upvote', function (req, res, next) {
	console.log('upvote hit');
	CommentPoint.create({
		userId: req.body.userId, //change to req.user.id when login is setup
		commentId: req.body.commentId
	}).then(function (upvote) {
		res.json(upvote);
	}).catch(next);
});

router.delete('/downvote', function (req, res, next) {
	console.log('downvote hit');
	CommentPoint.findOne({
		where: {
			userId: req.body.userId, //change to req.user.id when login is setup
			commentId: req.body.commentId
		}
	}).then(function (downvote) {
		downvote.destroy();
	}).then(function (downvote) {
		res.json({valid: true});
	}).catch(next);
});

module.exports = router;