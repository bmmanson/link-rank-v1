var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var router = express.Router();

router.get('/', function (req, res, next) {
	Post.findAll()
	.then(function (posts) {
		res.json(posts);
	}).catch(next);
});

module.exports = router;