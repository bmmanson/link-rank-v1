module.exports = function (app, db) {
	
	app.setValue = app.set.bind(app);

	app.getValue = function (path) {
		return app.get(path);
	};

	app.use(function (req, res, next) {
		next();
	})
	require('./app-variables')(app);
	require('./static-middleware')(app);
	require('./parsing-middleware')(app);
	require('./authentication')(app, db);
}