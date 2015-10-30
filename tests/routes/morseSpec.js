/**
 * Created by simon on 30/10/15.
 */
var request = require('supertest');

describe('loading express', function () {
    var server;

    beforeEach(function () {
        server = require('../../src/app');
    });

    afterEach(function () {
        server = null;
    });

    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });


    it('responds to /morse/SOS with json', function testMorse(done) {
        var res = request(server).get('/morse/Dave')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8');
        console.log(res.text);
        res.expect(200, done);
    });

    it('responds to "/alpha/... --- ..." with json', function testMorse(done) {
        var res = request(server).get('/alpha/... --- ...')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8');
        console.log(res.text);
        res.expect(200, done);
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});