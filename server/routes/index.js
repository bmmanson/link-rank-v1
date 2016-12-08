var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next) {
// 	res.send("ROOT ROUTE");
// });

router.use('/api', require('./api/'));

module.exports = router;