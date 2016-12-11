var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var User = require('./../../../models/user');
var Comment = require('./../../../models/comment');
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

module.exports = router;