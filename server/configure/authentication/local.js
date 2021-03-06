'use strict';
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (app, db) {

    var User = db.model('user');

    var strategyFn = function (name, password, done) {
        User.findOne({
                where: {
                    name: name
                }
            })
            .then(function (user) {
                if (!user || !user.correctPassword(password)) {
                    done(null, false);
                } else {
                    done(null, user);
                }
            })
            .catch(done);
    };

    passport.use(new LocalStrategy({usernameField: 'name', passwordField: 'password'}, strategyFn));

    app.post('/auth/login', function (req, res, next) {
        console.log('login route hit', req.body);
        var authCb = function (err, user) {
            console.log('user in authCb', user);
            if (err) return next(err);

            if (!user) {
                var error = new Error('Invalid login credentials.');
                error.status = 401;
                return next(error);
            }
            user.sessionId = req.session.id;
            req.logIn(user, function (loginErr) {
                console.log('req.login invoked');
                if (loginErr) return next(loginErr);

                res.status(200).send({
                    user: user.sanitize()
                });
            });
        };
        passport.authenticate('local', authCb)(req, res, next);
    });

};