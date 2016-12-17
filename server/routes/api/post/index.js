var express = require('express');
var Promise = require('bluebird');
var Post = require('./../../../models/post');
var PostPoint = require('./../../../models/post-point');
var User = require('./../../../models/user');
var router = express.Router();

router.use('/comment', require('./comment.js'));

router.get('/main', function (req, res, next) {
	console.log('main, req.user', req.user);
	Post.findAll({
		include:[
			{
				model: User,
				as: "user"
			}
		],
		limit: 500,
		order: [
			['updatedAt', 'DESC']
		]
	})
	.then(function (posts) {
		var promisesForPostsWithUserVoted = [];
		//if user is not logged in, no need to do this
		posts.forEach(function (post) {
			promisesForPostsWithUserVoted.push(
				PostPoint.findOne({
					where: 
						{
						postId: post.id,
						userId: 1 //change when login setup
						}
				})
				.then(function (userVoted) {
					if (userVoted) {
						return {
							data: post,
							voted: true
						};
					} else {
						return {
							data: post,
							voted: false
						};
					}
				})
			);
		});

		return Promise.all(promisesForPostsWithUserVoted);
	})
	.then(function (posts) {
		res.json(posts);
	}).catch(next);
});

router.get('/newest', function (req, res, next) {
	console.log('newest, req.user', req.user);
	Post.findAll({
		include:[
			{
				model: User,
				as: "user"
			}
		],
		limit: 500,
		order: [
			['createdAt', 'DESC']
		]
	})
	.then(function (posts) {
		var promisesForPostsWithUserVoted = [];

		posts.forEach(function (post) {
			promisesForPostsWithUserVoted.push(
				PostPoint.findOne({
					where: 
						{
						postId: post.id,
						userId: 1 //change when login setup
						}
				})
				.then(function (userVoted) {
					if (userVoted) {
						return {
							data: post,
							voted: true
						};
					} else {
						return {
							data: post,
							voted: false
						};
					}
				})
			);
		});

		return Promise.all(promisesForPostsWithUserVoted);
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
		return PostPoint.findOne({
			where: 
				{
				postId: id,
				userId: 1 //change when login setup
				}
		})
		.then(function (userVoted) {
			if (userVoted) {
				return {
					data: post,
					voted: true
				};
			} else {
				return {
					data: post,
					voted: false
				};
			}
		});
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
		downvote.destroy();
	}).then(function (downvote) {
		res.json({valid: true});
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