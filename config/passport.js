const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
let databaseFunction = require('../database_functions.js');

module.exports = function(passport) {
  console.log("Passport Function triggered.");

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async function(username, password, done) {
    console.log("Username: " + username);
    databaseFunction.db.get('SELECT * FROM USER WHERE user_email = ?', [username], function(err, row) {
      if(err) {
        console.log("unexpected error");
        return done(err);
      }

      if(!row) {
        console.log("row not found");
        return done(null, false);
      }

      console.log("bcrypt pass: " + row.user_password);

      const validPassword = bcrypt.compare(password, row.user_password);

      if(!validPassword) 
        done(null, false);
      
      var user = {
        username: row.user_email,
        firstName: row.first_name,
        lastName: row.last_name
      };

      return done(null, user);
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.username + " " + user.firstName + " " + user.lastName );
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
}


// module.exports = function(passport) {
// console.log("Passport Function triggered");

// passport.use(new LocalStrategy({
// 	usernameField: 'email',
// 	passwordField: 'password'
//   }, async function(username, password, done) {
// 	console.log(username);
// 	// change use from json to table
//     //let users = JSON.parse(dataStore);
//     console.log(users);

//     databaseFunction.authenticateUser(username, password, done);

//     for (var index = 0; index < users.length; ++index) {
//       var user = users[index];
//       console.log(user.email);

//       const validPassword = await bcrypt.compare(password, user.password);
      
//       // if(user.email == username && user.password == password){
//       if(user.email == username && validPassword){
//         done(null, user);
//       } else {
//         done(null, false);
//       }
//     }
//   }
// ));

// passport.serializeUser(function(user, done) {
// 	done(null, user.first_name + ' ' + user.last_name + ' ' + user.email); 
// });

// passport.deserializeUser(function(user, done) {
// 	done(null, user);
// });

// }