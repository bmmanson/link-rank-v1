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
		},
		{
			title: 'Hacker News',
			url: 'https://news.ycombinator.com/',
			text: 'the inspriation for this site',
			userId: 1
		},
		{
			title: "Jerusalem Post",
			url: 'http://www.jpost.com/',
			text: 'a local newspaper',
			userId: 2
		},
		{
			title: "Ha'aretz",
			url: 'http://www.haaretz.com',
			text: 'news about Israel',
			userId: 1
		},
		{
			title: "Twitter",
			url: 'http://www.twitter.com',
			text: 'another social network',
			userId: 3
		},
		{
			title: "Pitchfork",
			url: "http://pitchfork.com",
			text: "pretentious music reviews",
			userId: 3
		},
		{
			title: "Smitten Kitchen",
			url: "http://www.smittenkitchen.com",
			text: "delicious recipes",
			userId: 2
		},
		{
			title: "YouTube",
			url: "http://www.youtube.com",
			text: "cat videos",
			userId: 2
		},
	],
	comment: [
		{
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Aeque enim contingit omnibus fidibus, ut incontentae sint. Sit hoc ultimum bonorum, quod nunc a me defenditur; Oratio me istius philosophi non offendit; Duo Reges: constructio interrete. De quibus cupio scire quid sentias.",
			authorId: 2,
			postId: 1,
			parentId: null
		},
		{
			text: "Non autem hoc: igitur ne illud quidem. Semper enim ita adsumit aliquid, ut ea, quae prima dederit, non deserat. Cave putes quicquam esse verius. Si quidem, inquit, tollerem, sed relinquo. Non igitur bene. Sint modo partes vitae beatae. Tuo vero id quidem, inquam, arbitratu. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia.",
			authorId: 1,
			postId: 1,
			parentId: 1
		},
		{
			text: "Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. A primo, ut opinor, animantium ortu petitur origo summi boni. Quorum sine causa fieri nihil putandum est. Primum divisit ineleganter; Itaque fecimus. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret?",
			authorId: 3,
			postId: 1,
			parentId: 1
		},
		{
			text: "Graecum enim hunc versum nostis omnes: Suavis laborum est praeteritorum memoria. Quamquam te quidem video minime esse deterritum. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Quorum sine causa fieri nihil putandum est. Quae similitudo in genere etiam humano apparet. Aliter enim explicari, quod quaeritur, non potest. Tecum optime, deinde etiam cum mediocri amico.",
			authorId: 1,
			postId: 1,
			parentId: null
		},
		{
			text: "Idem iste, inquam, de voluptate quid sentit? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Hic ambiguo ludimur.",
			authorId: 3,
			postId: 1,
			parentId: 2
		},
		{
			text: "Sed eget scelerisque mauris. Nunc lobortis, libero a aliquam dictum, turpis arcu venenatis mauris, luctus venenatis mauris dui ac lacus.",
			authorId: 1,
			postId: 1,
			parentId: 2
		},
		{
			text: "Nulla facilisi. Cras sit amet tempor nisi. Cras vel velit sit amet nibh hendrerit cursus id ac leo. Suspendisse cursus lorem ut urna cursus, non viverra nunc consequat. Aliquam maximus auctor eleifend. Etiam tristique libero fringilla dui fermentum dignissim. Sed quis aliquam ante.",
			authorId: 3,
			postId: 1,
			parentId: 2
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