var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');
var api_key = "918f77748056929b5e2a60ceb6f4ad4e";



router.post('/', (req, res, next) => {
  function validInput(league, season) {
    if(league == "-1" || season == "-1") {
      console.log("select both");
      res.render('resultError');
    } else {
      res.render('result', { league: league, season : season, api_key : api_key });
    }
  }
  
  var config = {
    method: 'GET',
    qs: {league: '39', season: '2019'},  
    // qs: {id: '33'},
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '918f77748056929b5e2a60ceb6f4ad4e'
    }
  };
  
  console.log(req.body.selected_league); 
  console.log(req.body.selected_season);

  let league = req.body.selected_league;
  let season = req.body.selected_season;

  validInput(league, season);

  // if(league == "-1" || season == "-1") {
  //   console.log("select both");
  //   res.render('resultError');
  // }
  // else 
  //   res.render('result', { league: league, season : season, api_key : api_key });

});

module.exports = router;