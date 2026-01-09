var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Akshay' ,place: 'rkara'});
});

module.exports = router;
