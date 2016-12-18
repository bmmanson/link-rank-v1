var Promise = require('bluebird');
var db = require('./models');

var data = {
	user: [
		{
			name: 'benny',
			facebookId: 'a',
			password: 'abc',
			email: 'a@a.com',
			isAdmin: true,
			verified: true
		},
		{
			name: 'bex',
			facebookId: 'b',
			password: 'abc',
			email: 'b@a.com',
			verified: true
		},
		{
			name: 'gus',
			facebookId: 'c',
			password: 'abc',
			email: 'a@b.com',
			verified: true
		},
		{
			name: 'rob',
			facebookId: 'd',
			password: 'def',
			email: 'd@a.com'
		},
		{
			name: 'henry',
			facebookId: 'e',
			password: 'ghi',
			email: 'd@b.com'
		},
		{
			name: 'don',
			facebookId: 'f',
			password: 'def',
			email: 'c@a.com'
		},
		{
			name: 'mark',
			facebookId: 'g',
			password: 'abc',
			email: 'd@f.com'
		},
		{
			name: 'alexa',
			facebookId: 'h',
			password: 'abc',
			email: 'x@a.com'
		},
		{
			name: 'joan',
			facebookId: 'i',
			password: 'mnop',
			email: 'a@ba.com'
		},
		{
			name: 'john',
			facebookId: 'a1',
			password: 'mnop',
			email: 'b@aba.com'
		}
	],
}

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
  	for (var i = 0; i < 10000; i++) {};
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
  console.error('Error:', err, err.stack);
});