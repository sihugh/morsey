/**
 * Created by simon on 30/10/15.
 */
var Morse = function() {
};

(function addLookUps(parent) {
    var alpha_to_morse = {};
    alpha_to_morse.A = ".-";
    alpha_to_morse.B = "-...";
    alpha_to_morse.C = "-.-.";
    alpha_to_morse.D = "-..";
    alpha_to_morse.E = ".";
    alpha_to_morse.F = "..-.";
    alpha_to_morse.G = "--.";
    alpha_to_morse.H = "....";
    alpha_to_morse.I = "..";
    alpha_to_morse.J = ".---";
    alpha_to_morse.K = "-.-";
    alpha_to_morse.L = ".-..";
    alpha_to_morse.M = "--";
    alpha_to_morse.N = "-.";
    alpha_to_morse.O = "---";
    alpha_to_morse.P = ".--.";
    alpha_to_morse.Q = "--.-";
    alpha_to_morse.R = ".-.";
    alpha_to_morse.S = "...";
    alpha_to_morse.T = "-";
    alpha_to_morse.U = "..-";
    alpha_to_morse.V = "...-";
    alpha_to_morse.W = ".--";
    alpha_to_morse.X = "-..-";
    alpha_to_morse.Y = "-.--";
    alpha_to_morse.Z = "--..";
    alpha_to_morse["0"] = "-----";
    alpha_to_morse["1"] = ".----";
    alpha_to_morse["2"] = "..---";
    alpha_to_morse["3"] = "...--";
    alpha_to_morse["4"] = "....-";
    alpha_to_morse["5"] = ".....";
    alpha_to_morse["6"] = "-....";
    alpha_to_morse["7"] = "--...";
    alpha_to_morse["8"] = "---..";
    alpha_to_morse["9"] = "----.";
    alpha_to_morse["."] = ".-.-.-";
    alpha_to_morse[","] = "--..--";
    alpha_to_morse["?"] = "..--..";
    alpha_to_morse["="] = "-...-";

    var morse_to_alpha = {};
    morse_to_alpha[".-"] = "A";
    morse_to_alpha["-..."] = "B";
    morse_to_alpha["-.-."] = "C";
    morse_to_alpha["-.."] = "D";
    morse_to_alpha["."] = "E";
    morse_to_alpha["..-."] = "F";
    morse_to_alpha["--."] = "G";
    morse_to_alpha["...."] = "H";
    morse_to_alpha[".."] = "I";
    morse_to_alpha[".---"] = "J";
    morse_to_alpha["-.-"] = "K";
    morse_to_alpha[".-.."] = "L";
    morse_to_alpha["--"] = "M";
    morse_to_alpha["-."] = "N";
    morse_to_alpha["---"] = "O";
    morse_to_alpha[".--."] = "P";
    morse_to_alpha["--.-"] = "Q";
    morse_to_alpha[".-."] = "R";
    morse_to_alpha["..."] = "S";
    morse_to_alpha["-"] = "T";
    morse_to_alpha["..-"] = "U";
    morse_to_alpha["...-"] = "V";
    morse_to_alpha[".--"] = "W";
    morse_to_alpha["-..-"] = "X";
    morse_to_alpha["-.--"] = "Y";
    morse_to_alpha["--.."] = "Z";
    morse_to_alpha["-----"] = "0";
    morse_to_alpha[".----"] = "1";
    morse_to_alpha["..---"] = "2";
    morse_to_alpha["...--"] = "3";
    morse_to_alpha["....-"] = "4";
    morse_to_alpha["....."] = "5";
    morse_to_alpha["-...."] = "6";
    morse_to_alpha["--..."] = "7";
    morse_to_alpha["---.."] = "8";
    morse_to_alpha["----."] = "9";
    morse_to_alpha[".-.-.-"] = ".";
    morse_to_alpha["--..--"] = ",";
    morse_to_alpha["..--.."] = "?";
    morse_to_alpha["-...-"] = "=";

    parent.prototype.alpha_to_morse = alpha_to_morse;
    parent.prototype.morse_to_alpha = morse_to_alpha;
})(Morse);

Morse.prototype.convert_to_alpha = function (text) {
    var self = this,
        converted_characters,
        morse = text.split(" ");

        converted_characters = self.translate(morse, self.morse_to_alpha);

    return converted_characters.join("");
};

Morse.prototype.convert_to_morse = function (text) {
    var self = this,
        converted_characters;

    text = text.toUpperCase();
    converted_characters = self.translate(text, self.alpha_to_morse);

    return converted_characters.join(" ");
};


Morse.prototype.translate = function (source_characters, dictionary) {
    var converted_characters = [],
        source_character,
        translated_character;

    for (i = 0; i < source_characters.length; i++) {
        source_character = source_characters[i];
        translated_character = dictionary[source_character];
        converted_characters.push(translated_character);
    }

    return converted_characters;
};
module.exports = Morse;
