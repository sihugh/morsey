var Morse = require('../../src/utils/morseHelper'),
    expect = require('chai').expect;

var morse = new Morse();

describe("morse.convert_to_alpha", function(){
    it("should return 'SOS' when given '... --- ...'", function(){
        expect(morse.convert_to_alpha('... --- ...')).to.equal("SOS");
    });
    it("should replace unknown characters with #", function(){
        expect(morse.convert_to_alpha("...... --- ...")).to.equal("#OS");
    });
    it("should replace pipes ('|') with spaces (' ')", function(){
        expect(morse.convert_to_alpha(".... .- -- | .- -. -.. | . --. --. ...")).to.equal("HAM AND EGGS");
    });
});


describe("morse.convert_to_morse", function(){
    it("should return '... --- ...' when given 'SOS'", function(){
        expect(morse.convert_to_morse("SOS")).to.equal('... --- ...');
    });
    it("should be case insensitive", function(){
        expect(morse.convert_to_morse("soS")).to.equal('... --- ...');
    });
    it("should separate words with a pipe ('|')", function(){
        expect(morse.convert_to_morse("ham and eggs")).to.equal(".... .- -- | .- -. -.. | . --. --. ...");
    });
});