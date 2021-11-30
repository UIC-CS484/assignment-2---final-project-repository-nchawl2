var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

router.get('/', function(req, res, next) {
    var _userInfo = req.user;
    var userData = _userInfo.split(" ");
    var userInfo = userData[1] + ' ' + userData[2];
    var email = userData[0];
    console.log("email: " + email);
    console.log("arr: " + userData);
    console.log("Dashboard: " + userInfo);

    res.render('dashboard', { userInfo : userInfo , email : email, date : date });
    
});

module.exports = router;