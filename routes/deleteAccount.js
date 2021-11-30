var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');

router.post('/', async function(req, res, next) {
  var email = req.body.user_email;
  console.log("deleted email: " + email);

  databaseFunction.deleteAccount(email);
  
  res.render('deleteAccount');
});

module.exports = router;