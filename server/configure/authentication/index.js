'use strict';

var path = require('path');
var passport = require('passport');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

module.exports = function(app, db) {

	var dbStore = new SequelizeStore({
		db: db
	});

    var User = db.model('user'); 

	app.use(session({
		secret: 'so secret',
		store: dbStore,
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false
		}
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function (user, done) {
		console.log('serialize user');
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  console.log('deserialize');
	  done(null, id);
	  User.findById(id)
	  .then(function (user) {
	  	done(null, user);
	  }).catch(function (err) {
	  	done(err);
	  });
	});

	app.get('/session', function (req, res) {
        if (req.user) {
            res.send({ user: req.user.sanitize() });
        } else {
            res.status(401).send('No authenticated user.');
        }
    });

    app.get('/logout', function (req, res) {
    	console.log('logout hit');
        req.logout();
        res.status(200).end();
    });

	require(path.join(__dirname, 'local'))(app, db);

}