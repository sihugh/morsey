var express = require('express');
var router = express.Router();
var Morse = require('../utils/morseHelper'),
    morse = new Morse();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Morse Code Converter'});
});

router.get('/morse/:text', function (req, res, next) {

    var text,
        translated;

    text = req.params.text;
    translated = morse.convert_to_morse(text);

    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({"orig": text, "morse": translated}));
});

router.get('/alpha/:text', function (req, res, next) {

    var text,
        translated;

    text = req.params.text;
    translated = morse.convert_to_alpha(text);

    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({"orig": text, "alpha": translated}));
});

module.exports = router;
