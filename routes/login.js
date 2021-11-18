var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

// WORKING CHUCK NORRIS
// router.get('/', function(req, res, next) {
//     // Make a request to the API 
//   axios.get('https://api.chucknorris.io/jokes/random')
//     .then(function (response) {
//       console.log(response.data.value); // prints API data
//       // handle success  
//       let joke = response.data.value;
//       //let qoute = response;
//       //Math.floor(Math.random() * qoute.length)
//       //let aQoute = qoute.data[Math.floor(Math.random() * qoute.data.length)];
//       //console.log(aQoute);
//       //res.render('login');
//       res.render('login', { joke : joke });
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
            
// });



// var url = 'https://v3.football.api-sports.io/teams?id=33';
// var url = 'https://v3.football.api-sports.io/teams?name=fc barcelona';
// var url = 'https://v3.football.api-sports.io/standings';


// var config = {
//   method: 'GET',
//   qs: {league: '39', season: '2019'},  
//   // qs: {id: '33'},
//   headers: {
//     'x-rapidapi-host': 'v3.football.api-sports.io',
//     'x-rapidapi-key': '918f77748056929b5e2a60ceb6f4ad4e'
//   }
// };

// // // var url = 'https://v3.football.api-sports.io/standings?'+config.qs.league+'&'+config.qs.season;
// var url = 'https://v3.football.api-sports.io/standings?league=39&season=2019';

// router.get('/', function(req, res, next) {
//   // axios.get('https://v3.football.api-sports.io/teams')
//   axios.get(url, config)
//     .then(function(response) {
//       console.log(response.data.response);
//       console.log(response.data.respone.standings[0]);
//       res.render('login');
//     })
//     .catch(function(error) {
//       console.log(error);
//     })
//     .then(function() {

//     });
// })










// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// var options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
//   params: {league: '39', season: '2020', team: '33'},
//   headers: {
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
//     'x-rapidapi-key': '970eb716e2mshe97a67429ac9682p14bfc3jsn2211293c52bc'
//   }
// };

// router.get('/', function(req, res, next) {
//   axios.request(options)
//   .then(function (response) {
//     console.log(response);
//     res.render('login');
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {

//   });
// });

module.exports = router;