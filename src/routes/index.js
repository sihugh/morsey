var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Morse Code Converter'});
});

router.post('/alpha', function (req, res, next) {
    res.render('index', {title: 'Morse Code Converter'});
});

router.post('/morse', function (req, res, next) {
    res.render('index', {title: 'Morse Code Converter'});
});

module.exports = router;
