var sqlite3 = require('sqlite3').verbose();
//const bcrypt = require('bcryptjs');

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./database/task.sqlite', (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
        //Successful database connection
        console.log('Connected to the SQLite database.'); 
    }
});

//Create a User
let createUser = (id, email, password) => {
	var createUserSql ='INSERT INTO USER (user_id, user_email,user_password) VALUES (?,?,?)';
	// var params =[null, email, password];
	var params =[id, email, password];


	db.run(createUserSql, params, function(err){
		if (err) {
			return console.log(err.message);
		}
    
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

let authenticateUser = (username, password, done) =>{
	var findUser = 'SELECT * FROM USER WHERE username = ?';

	db.get(findUser, username, function (err, user) {
		console.log(user);
		if (!user) {
		  return done(null, false);
		}
		bcrypt.compare(password, user.prof_password, function (err, result) {
		  if (err) {
			return console.log(err.message);
		  }
		  if (result) {
			return done(null, user);
		  }
		});
  
	  });
}

let addFavLeague = (leagueID, leagueName, userID) => {
  var addLeague = 'INSERT INTO favoriteLeagues (leagueID, leagueName, leagueUserID) VALUES (?, ?, ?)';
  var params = [leagueID, leagueName, userID];

  db.run(addLeague, params, function(err) {
    if(err)
      return console.log(err.message);

    console.log("League Added");
    console.log(`Rows inserted ${this.changes}`);
  });
}

let getFavLeagues = (userID) => {
  var getLeagues = 'SELECT * FROM favoriteLeagues WHERE leagueUserID = ?';
  var params = [userID];

  db.run(getLeagues, params, function(err) {
    if(err)
      return console.log(err.message);

    console.log("Favorite leagues retrieved successfully");
  })
}

let deleteAccount = (userEmail) => {
  var deleteAcc = 'DELETE FROM USER WHERE user_email = ?';
  var params = userEmail;

  db.run(deleteAcc, params, function(err) {
    if(err)
      return console.log(err.message);

    console.log(`Row Deleted: ${this.changes}`);
  })
}

module.exports = {db, createUser, authenticateUser, addFavLeague, deleteAccount};