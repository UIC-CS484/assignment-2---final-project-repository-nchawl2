var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

router.get('/', function(req, res, next) {
    var userInfo = req.user;
    console.log("Dashboard: " + userInfo);

    res.render('dashboard', { userInfo : userInfo , date : date });
    
});

module.exports = router;