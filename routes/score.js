var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('livescore', { date : date });
});

module.exports = router;