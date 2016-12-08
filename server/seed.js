var Promise = require('bluebird');
var db = require('./models');
// var Message = require('./models/message');
// var User = require('./models/user');

var data = {
	user: [
		{
			name: 'benny',
			facebookId: 'a',
		},
		{
			name: 'bex',
			facebookId: 'b',
		},
		{
			name: 'gus',
			facebookId: 'c'
		}

	],
	post: [
		{
			title: "The New York Times",
			url: "http://nytimes.com",
			description: "a place to read the news",
			userId: 1
		},
		{
			title: "Wikipedia",
			url: "http://www.wikipedia.org",
			description: "a helpful resource for information",
			userId: 2
		},
		{
			title: "Google",
			url: "http://www.google.com",
			description: "a website for finding websites",
			userId: 1
		},
		{
			title: "Allmusic",
			url: "http://www.allmusic.com",
			description: "read about music here",
			userId: 3
		}
	]
}

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});