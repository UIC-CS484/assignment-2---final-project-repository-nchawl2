var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
	//var data = res.selected_league.value;
  console.log(req.body.selected_league); // prints name, change in hbs file if you want number
  //console.log(req.body.selected_league.text); // prints name
  res.render('result')
});

module.exports = router;