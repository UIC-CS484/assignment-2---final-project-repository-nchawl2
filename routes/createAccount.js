var express = require('express');
var router = express.Router();

/* GET createAccount */
router.get('/', function(req, res, next) {
  res.render('createAccount', {title: 'Create Account'});
});

module.exports = router;