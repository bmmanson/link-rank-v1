var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send("ROOT API ROUTE. WELCOME");
})

router.use('/post', require('./post/'));
router.use('/user', require('./user/'));

module.exports = router;