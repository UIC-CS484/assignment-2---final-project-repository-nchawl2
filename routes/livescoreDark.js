var express = require('express');
var router = express.Router();
var today = new Date();
var date = new Date().toISOString().slice(0, 10);
var api_key = "918f77748056929b5e2a60ceb6f4ad4e";

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('livescoreDark', { date : date, api_key : api_key });
});

module.exports = router;