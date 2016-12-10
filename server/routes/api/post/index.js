var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var User = require('./../../../models/user');
var router = express.Router();

router.get('/', function (req, res, next) {
	Post.findAll({
		include:[
			{
				model: User,
				as: "user"
			}
		]
	})
	.then(function (posts) {
		res.json(posts);
	}).catch(next);
});

router.post('/new', function (req, res, next) {
	Post.create({
		title: req.body.title,
		url: req.body.url,
		text: req.body.text,
		userId: req.body.userId
	}).then(function (post) {
		res.json(post);
	}).catch(next);
});

module.exports = router;