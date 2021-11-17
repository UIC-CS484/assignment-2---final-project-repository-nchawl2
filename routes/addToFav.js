var express = require('express');
var router = express.Router();
var databaseFunction = require('../database_functions.js');
var functions = require('../functions');

router.post('/', async function(req, res, next) {
  var season = req.body.season;
  var leagueID = req.body.league;
  var league = functions.leagueIDToName(leagueID);
  console.log(league);

  res.render('addToFav', { league : league });
})


/* GET home page. */
// router.post('/', async function(req, res, next) {
    
//     var first_name = req.body.first_name;
//     var last_name = req.body.last_name;
//     var email = req.body.email;
//     var password = req.body.password;
    
//     if (!strongPassword(req.body.password)) {
//         var error = "Password not long enough";
//         res.render('error', {error:error});
//     }
//     else{
//         console.log("first_name: " + first_name + "last_name: " + last_name + " Email: " + email + " Password: " + password);

//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         console.log("Hashed Password: " + hashedPassword);

//         'use strict';
//         var randomValue = Math.random() * 123;
//         let users = [{ 
//             id: randomValue,
//             first_name: first_name,
//             last_name: last_name, 
//             email: email,
//             // password: password
//             password: hashedPassword
//         }];

//         // databaseFunction.createUser(users[0].id, users[0].email, users[0].password);
//         databaseFunction.createUser(users[0].id, users[0].email, users[0].password);        
//         let data = JSON.stringify(users);
//         fs.writeFileSync('users.json', data);

//         res.render('confirmation', { first_name : first_name, last_name: last_name});
//     }
// });

module.exports = router;

