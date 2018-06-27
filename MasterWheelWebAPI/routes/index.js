var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/wheelmaster', function (err, db) {
    if (err) {
	throw err;
    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function getDateTime() {
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + ":" + month + ":" + day;
}

router.get('/seed', function(req, res) {

    res.send(getDateTime());
})

router.get('/save', function(req, res) {
    res.send("No token provided");
})

router.put('/save/:token/:save', function(req, res) {
    if (isTokenValid(req.params.token)) {
	console.log(req.params.token);
	res.send("ok");
    } else {
	res.send("Bad Token");
    }
})

router.get('/check_save/:token/:save', function(req, res) {
    if (isTokenValid(req.params.token)) {
	console.log(req.params.save);
	res.send("ok");
    } else {
	res.send("Bad Token");
    }
})

function isTokenValid(token) {
    return true;
}

module.exports = router;
