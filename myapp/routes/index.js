var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const person={
    name:"Akshay",age:12,isAdmin:true
  }
  res.render('index', { title: 'Akshay' ,place: 'rkara',values:person});
});

module.exports = router;
