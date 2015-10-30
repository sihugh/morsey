var Morse = require('../../src/utils/morseHelper'),
    expect = require('chai').expect;

var morse = new Morse();

describe("morse", function(){
    it("should return '... --- ...' when given 'SOS'", function(){
        expect(morse.convert_to_morse("SOS")).to.equal('... --- ...');
    });
    it("should return 'SOS' when given '... --- ...'", function(){
        expect(morse.convert_to_alpha('... --- ...')).to.equal("SOS");
    });
    it("should be case insensitive", function(){
        expect(morse.convert_to_morse("soS")).to.equal('... --- ...');
    })
});