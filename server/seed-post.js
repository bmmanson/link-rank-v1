var Promise = require('bluebird');
var db = require('./models');

var data = {
	post: [
		{
			title: "The New York Times",
			url: "http://nytimes.com",
			text: "a place to read the news",
			userId: 1
		},
		{
			title: "Trudeau's Big Decision",
			url: 'https://www.thestar.com/opinion/commentary/2016/12/06/trudeaus-biggest-decision-youve-never-heard-of.html',
			text: "",
			userId: 1
		},
		{
			title: "YouTube",
			url: "http://www.youtube.com",
			text: "cat videos",
			userId: 2
		},
		{
			title: "Why Your Cat Is So Weird",
			url: "http://www.vox.com/2016/4/30/11532396/funny-cat-video-youtube-science",
			text: "",
			userId: 3
		},
		{
			title: "CIA Judgment on Russia Based on Swell of Evidence",
			url: "http://www.nytimes.com/2016/12/11/us/politics/cia-judgment-intelligence-russia-hacking-evidence.html",
			text: "",
			userId: 1
		},
		{
			title: "Russia and the Threat to Liberal Democracy",
			url: 'http://www.defenseone.com/ideas/2016/12/russia-and-threat-liberal-democracy/133780/?oref=site-defenseone-flyin-sailthru',
			text: "",
			userId: 1
		},
		{
			title: "The Social Media Echo Chamber",
			url: 'https://www.brookings.edu/blog/techtank/2016/12/09/inside-the-social-media-echo-chamber/',
			text: "",
			userId: 2
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
			title: "'We Are Dead Either Way': Agonizing Choices For Syrians in Aleppo",
			url: 'http://www.nytimes.com/2016/12/10/world/middleeast/we-are-dead-either-way-agonizing-choices-for-syrians-in-aleppo.html',
			text: "",
			userId: 2
		},
		{
			title: "An Antidote to Donald Trump's Secrets on Taxes",
			url: "http://www.nytimes.com/2016/12/12/opinion/an-antidote-to-donald-trumps-secrecy-on-taxes.html?action=click&pgtype=Homepage&clickSource=story-heading&module=opinion-c-col-left-region&region=opinion-c-col-left-region&WT.nav=opinion-c-col-left-region",
			text: "",
			userId: 3
		},
		{
			title: "Want to renegotiate the Iran deal?",
			url: "https://www.brookings.edu/blog/markaz/2016/12/09/want-to-renegotiate-the-iran-deal-much-harder-than-it-looks/",
			text: "",
			userId: 2
		},
		{
			title: "Buying Stolen Data",
			url: "https://techcrunch.com/2016/12/11/buying-stolen-data/",
			text: "",
			userId: 2
		},
		{
			title: "How Jaffa Got Its American Colony",
			url: "http://www.haaretz.com/israel-news/.premium-1.758369",
			text: "",
			userId: 1
		},
		{
			title: "Covering Politics in a Post Truth America",
			url: "https://www.brookings.edu/essay/covering-politics-in-a-post-truth-america/",
			text: "",
			userId: 3
		},
		{
			title: "China 'seriously concerned' after Trump questions Taiwan policy",
			url: "https://www.theguardian.com/us-news/2016/dec/12/donald-trump-questions-us-commitment-to-one-china-policy",
			text: "",
			userId: 1	
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
			title: "Islamic State retakes historic city of Palmyra",
			url: "https://www.theguardian.com/world/2016/dec/11/islamic-state-retakes-palmyra-syria",
			text: "",
			userId: 2
		},
		{
			title: "An unexpected result of Yemen’s war: More men are cooking and cleaning",
			url: 'https://www.washingtonpost.com/world/middle_east/an-unexpected-result-of-yemens-war-more-men-are-cooking-and-cleaning/2016/12/09/7dcaf69d-642d-4fd4-8e74-44e189cb778b_story.html?hpid=hp_hp-more-top-stories_yemenwomen-1255am%3Ahomepage%2Fstory&utm_term=.cbf996c9da85',
			text: "",
			userId: 1
		},
		{
			title: "Pakistani Birds Caught in a Swirl of International Intrigue",
			url: "https://www.washingtonpost.com/world/asia_pacific/pakistani-birds-caught-up-in-international-intrigue/2016/12/11/1205a16e-bfb8-11e6-a52b-a0a126eaf9f7_story.html?hpid=hp_hp-more-top-stories_pakbirds-915pm%3Ahomepage%2Fstory&utm_term=.72b30046d445",
			text: "",
			userId: 3
		},
		{
			title: "Why a Trump Presidency Inspires Fear",
			url: 'https://www.washingtonpost.com/opinions/why-a-trump-presidency-inspires-fear/2016/12/11/3b2259f8-bfda-11e6-897f-918837dae0ae_story.html?tid=pm_pop&utm_term=.b03cdce1e416',
			text: "",
			userId: 3
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
			title: "Indian Government Refuses to Allow Wi-Fi on Planes",
			url: 'http://mashable.com/2016/12/12/india-planes-in-flight-wifi-2016/?utm_cid=hp-n-1#copIMByRiiq7',
			text: "",
			userId: 1
		},
		{
			title: "Israeli Health Minister Warns Against Donuts During Hannukah",
			url: 'http://www.jpost.com/Israel-News/Do-not-eat-doughnuts-during-Hanukkah-warns-Israeli-health-minister-475133',
			text: "",
			userId: 1
		},
		{
			title: "Why are we still paying to check bags?",
			url: "http://www.vox.com/videos/2016/12/7/13854628/checked-baggage-fees",
			text: "",
			userId: 2
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
			title: "The Impact of Open Government",
			url: "https://www.brookings.edu/research/the-impact-of-open-government-assessing-the-evidence/",
			text: "",
			userId: 3
		},
		{
			title: "Book Review: Iran Reconsidered",
			url: "https://www.brookings.edu/book/iran-reconsidered/",
			text: "",
			userId: 1
		},
		{
			title: "All The President's Propaganda",
			url: "http://www.nytimes.com/2016/12/12/opinion/all-the-presidents-propaganda.html?action=click&pgtype=Homepage&clickSource=story-heading&module=opinion-c-col-right-region&region=opinion-c-col-right-region&WT.nav=opinion-c-col-right-region",
			text: "",
			userId: 1
		},
		{
			title: "Assad Forces Close to Capturing East Aleppo",
			url: "https://www.theguardian.com/world/2016/dec/12/syria-assad-forces-close-to-capturing-east-aleppo",
			text: "",
			userId: 3
		},
		{
			title: "Patriotic Opposition To Trump",
			url: "http://www.nytimes.com/2016/12/12/opinion/patriotic-opposition-to-donald-trump.html?hpw&rref=opinion&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well",
			text: "",
			userId: 2
		},
		{
			title: "Sen. Schumer Demands Full Probe Into Russian 'Interference' in Election",
			url: "http://www.haaretz.com/us-news/1.758461",
			text: "",
			userId: 1
		}

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

db.sync({force: false})
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