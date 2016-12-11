var Promise = require('bluebird');
var db = require('./models');

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
			text: "a place to read the news",
			userId: 1
		},
		{
			title: "Wikipedia",
			url: "http://www.wikipedia.org",
			text: "a helpful resource for information",
			userId: 2
		},
		{
			title: "Google",
			url: "http://www.google.com",
			text: "a website for finding websites",
			userId: 1
		},
		{
			title: "Allmusic",
			url: "http://www.allmusic.com",
			text: "read about music here",
			userId: 3
		},
		{
			title: "Vox",
			url: "http://www.vox.com",
			text: "a website for explanatory journalism",
			userId: 2
		}
	],
	comment: [
		{
			text: "In my limited experience this is science, art, and craft. I don't think there is a specific method to do this in an automated way.",
			authorId: 2,
			postId: 1,
			parentId: null
		},
		{
			text: "Have you looked into Snowflake? Seems like their solution satisfies most of your requirements, including native ingestion of unstructured data. The one caveat is that all source data must first be loaded to S3.",
			authorId: 1,
			postId: 1,
			parentId: 1
		},
		{
			text: "Great question, but I don't see this much different from other industries or companies with millions or billions of dollars at stake. They don't all roll their own software inhouse, and most companies (hedgefunds or not, small or even large) simply cannot afford to for financial and commercial risk-management reasons unless they can justify the software truly being a core competitive competency.",
			authorId: 3,
			postId: 1,
			parentId: 2
		},
		{
			text: "The same line of inquiry has been evaluated for most 3rd party software that companies rely on. For this specific instance of data collection and cleaning, I'm imagining it's not going to be a much different calculus, although perhaps you'll see a higher percentage of firms choosing to roll their own if they have the chops and pockets (e.g. Two Sigma, Bridgewater, Goldman Sachs, etc.).",
			authorId: 3,
			postId: 1,
			parentId: 1
		},
		{
			text: "My last company did this. You don't know how hard it is to get people to turn their data over to you.",
			authorId: 1,
			postId: 1,
			parentId: null
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