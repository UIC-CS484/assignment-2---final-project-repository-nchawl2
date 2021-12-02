var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');
var api_key = "918f77748056929b5e2a60ceb6f4ad4e";

router.post('/', (req, res, next) => {
  var config = {
    method: 'GET',
    qs: {league: '39', season: '2019'},  
    // qs: {id: '33'},
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '918f77748056929b5e2a60ceb6f4ad4e'
    }
  };
  
  console.log(req.body.league); 
  console.log(req.body.season);

  let league = req.body.league;
  let season = req.body.season;

  if(league == "-1" || season == "-1") {
    console.log("select both");
    res.render('resultError');
  }
  else 
    res.render('resultDark', { league: league, season : season, api_key : api_key });
});

module.exports = router;