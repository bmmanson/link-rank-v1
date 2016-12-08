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

module.exports = router;