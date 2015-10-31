var express = require('express');
var router = express.Router();

var Morse = require('../utils/morseHelper'),
    morse = new Morse();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Morse Code Converter'});
});

router.post('/alpha', function (req, res, next) {
    var text,
        translated;

    text = req.body.morse;
    translated = morse.convert_to_alpha(text);

    res.render('translated', {title: 'Morse Code Converter', orig: text, translated: translated});
});

router.post('/morse', function (req, res, next) {
    var text,
        translated;

    text = req.body.alpha;
    translated = morse.convert_to_morse(text);

    res.render('translated', {title: 'Morse Code Converter', orig: text, translated: translated});
});

module.exports = router;
