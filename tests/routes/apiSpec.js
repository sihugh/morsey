var request = require('supertest');

describe('morsey "api" general functionality', function () {
    var server;

    beforeEach(function () {
        server = require('../../src/app');
    });

    afterEach(function () {
        server = null;
    });

    it('responds to api/morse/SOS with json', function testMorse(done) {
        var res = request(server).get('/api/morse/Dave')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8');
        var expected = {"orig": "Dave", "morse": "-.. .- ...- ."};

        res.expect(JSON.stringify(expected))
            .expect(200, done);
    });

    it('responds to "api/alpha/... --- ..." with json', function testMorse(done) {
        var res = request(server).get('/api/alpha/... --- ...')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8');
        console.log(res.text);
        res.expect(200, done);
    });
});