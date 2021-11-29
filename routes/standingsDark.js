var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');

// ------------------------------------------------------------------------------------
// WORKING PART
// router.post('/', (req, res, next) => {
// 	//var data = res.selected_league.value;
//   console.log(req.body.selected_league); // prints name, change in hbs file if you want number
//   console.log(req.body.selected_season);
//   //console.log(req.body.selected_league.text); // prints name

//   let league = req.body.selected_league;
//   let season = req.body.selected_season;
  

  
//   res.render('result', { league: league, season : season });
// });

// module.exports = router;
// ------------------------------------------------------------------------------------

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
    res.render('resultDark', { league: league, season : season });
});

module.exports = router;



// // var url = 'https://v3.football.api-sports.io/standings?'+config.qs.league+'&'+config.qs.season;
var url = 'https://v3.football.api-sports.io/standings?league=39&season=2019';

router.get('/', function(req, res, next) {
  // axios.get('https://v3.football.api-sports.io/teams')
  axios.get(url, config)
    .then(function(response) {
      console.log(response.data.response);
      console.log(response.data.respone.standings[0]);
      res.render('login');
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {

    });
})