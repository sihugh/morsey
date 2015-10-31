/**
 * Created by simon on 30/10/15.
 */
var request = require('supertest');

describe('morsey general functionality', function () {
    var server;

    beforeEach(function () {
        server = require('../../src/app');
    });

    afterEach(function () {
        server = null;
    });

    it('responds to a get for /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to a post to /morse', function testSlash(done) {
        var alpha = {"alpha": "SOS"};
        request(server)
            .post('/morse')
            .send(alpha)
            .expect(200, done);
    });

    it('responds to a post to /alpha', function testSlash(done) {
        var morse = {"morse": "... --- ..."};
        request(server)
            .post('/alpha')
            .send(morse)
            .expect(200, done);
    });


    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});