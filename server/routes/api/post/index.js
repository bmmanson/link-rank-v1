var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var PostPoint = require('./../../../models/post-point');
var User = require('./../../../models/user');
var router = express.Router();

router.use('/comment', require('./comment.js'));

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

router.get('/:id', function (req, res, next) {
	var id = req.params.id;
	Post.findOne({
		where: 
			{
			id: id
			},
		include: [
			{
				model: User,
				as: "user"
			}
		]
	})
	.then(function (post) {
		res.json(post);
	}).catch(next);
});

router.post('/upvote', function (req, res, next) {
	PostPoint.create({
		userId: req.body.userId, //change to req.user.id when login is setup
		postId: req.body.postId
	}).then(function (upvote) {
		res.json(upvote);
	}).catch(next);
});

router.delete('/downvote', function (req, res, next) {
	PostPoint.findOne({
		where: {
			userId: req.body.userId, //change to req.user.id when login is setup
			postId: req.body.postId
		}
	}).then(function (downvote) {
		console.log(downvote);
		downvote.destroy();
	}).then(function (downvote) {
		res.json();
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