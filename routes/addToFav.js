var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');
var functions = require('../functions');

router.post('/', async function(req, res, next) {
  var season = req.body.season;
  var leagueID = req.body.league;
  var league = functions.leagueIDToName(leagueID);
  console.log(league);

  databaseFunction.addFavLeague(leagueID, league, 6);

  res.render('addToFav', { league : league });
})

module.exports = router;

