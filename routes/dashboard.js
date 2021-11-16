var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

var databaseFunction = require('../database_functions.js');

router.get('/', function(req, res, next) {
    var userInfo = req.user;
    console.log("Dashboard: " + userInfo);

    var allUsers = databaseFunction.getAllUsers;

    res.render('dashboard', { userInfo : userInfo , date : date , allUsers : allUsers});
    
});

module.exports = router;