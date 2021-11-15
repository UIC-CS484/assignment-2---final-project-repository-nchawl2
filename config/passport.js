const LocalStrategy = require('passport-local').Strategy;
let users = require('../users.json');

const bcrypt = require('bcryptjs');

module.exports = function(passport) {
console.log("Passport Function triggered");

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
  }, async function(username, password, done) {
	console.log(username);
	
    //let users = JSON.parse(dataStore);
    console.log(users);

    for (var index = 0; index < users.length; ++index) {
      var user = users[index];
      console.log(user.email);

      const validPassword = await bcrypt.compare(password, user.password);
      
      // if(user.email == username && user.password == password){
      if(user.email == username && validPassword){
        done(null, user);
      } else {
        done(null, false);
      }
    }
  }
));

passport.serializeUser(function(user, done) {
	done(null, user.first_name + ' ' + user.last_name); 
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

}