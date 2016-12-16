'use strict';
var passport = require('passport');
var FacebookStrategyToken = require('passport-facebook-token');
var env = require('./../../env');

module.exports = function (app, db) {

	var User = db.model('user');

	var credentials = {
		clientID: env.FACEBOOK_APP_ID,
		clientSecret: env.FACEBOOK_SECRET,
		profileFields: ['emails', 'displayName'],
	};

	var verifyCallback = function(accessToken, refreshToken, profile, done) {
		console.log("PROFILE:", profile);
		User.findOne({where: 
			{
			facebookId: profile.id
			}
		})
		.then(function (user) {
			if (user === null) {
				console.log("creating new user");
				return User.create({ 
	   				facebookId: profile.id,
	   				name: profile.displayName
	    		});
			} else {
				return user;
			}
		})
	    .then(function (userToLogin) {
	    	console.log('user to login');
	    	done(null, userToLogin);
	    })
	    .catch(function (err) {
	    	done(err);
	    });
	}

	passport.use(new FacebookStrategyToken(credentials, verifyCallback));

	app.post('/auth/facebook/token', 
	passport.authenticate('facebook-token'),
	function(req, res) {
		var response = {
			userId: req.user.id,
			facebookId: req.user.facebookId
		}

		res.json(response);
	});

}