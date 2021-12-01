var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('livescoreDark', { date : date });
});

module.exports = router;