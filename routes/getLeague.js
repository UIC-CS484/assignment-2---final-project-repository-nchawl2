var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');
let users = require('../users.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  let user = users[0];
  let userID = user.id;
  console.log(user);
  console.log(userID);
  res.render('getLeague');
});

module.exports = router;