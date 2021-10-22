var express = require('express');
var router = express.Router();
var fs = require('fs');
var passwordValidator = require('password-validator');

function strongPassword(password) {
    var schema = new passwordValidator();
    schema
    .is().min(8)                                    // Minimum length 8
    .is().max(1000)                                 // Maximum length 1000
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
    
    var isValid = schema.validate(password);
    console.log("Password Validity: " + isValid);

    return isValid;
}

/* GET home page. */
router.post('/', function(req, res, next) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    
    if (!strongPassword(req.body.password)) {
        var error = "Password not long enough";
        res.render('error', {error:error});
    }
    else{
        console.log("first_name: " + first_name + "last_name: " + last_name + " Email: " + email + " Password: " + password);

        'use strict';
            var randomValue = Math.random() * 123;
        let users = [{ 
            id: randomValue,
            first_name: first_name,
            last_name: last_name, 
            email: email,
            password: password
        }];
        
        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);

        res.render('confirmation', { first_name : first_name, last_name: last_name});
    }
});

module.exports = router;

//exports.strongPassword = strongPassword;
//module.exports = {strongPassword};  // tests can't work without this, but it breaks the webapp