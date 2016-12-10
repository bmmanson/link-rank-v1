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

module.exports = router;