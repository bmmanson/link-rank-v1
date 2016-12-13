'use strict';
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var env = require('./../../env');

module.exports = function (app, db) {

	var User = db.model('user');

	var credentials = {
		clientID: env.FACEBOOK_APP_ID,
		clientSecret: env.FACEBOOK_SECRET,
		profileFields: ['id', 'displayName', 'photos', 'emails', 'gender'],
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
	    		});
			} else {
				return user;
			}
		})
	    .then(function (userToLogin) {
	    	done(null, userToLogin);
	    })
	    .catch(function (err) {
	    	done(err);
	    });
	}

	passport.use(new FacebookStrategy(credentials, verifyCallback));

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/login'}),
        function (req, res) {
            res.redirect('/');
    	}
    );

}