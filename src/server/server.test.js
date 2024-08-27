const request = require('supertest');
const app = require('./server'); // Adjust the path if necessary

describe('GET /', () => {
    it('responds with index.html', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
});