const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /api/greet', () => {

    it('should return greeting message (valid case)', async () => {
        const res = await request(app).get('/api/greet?name=Ayushi');
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Hello, Ayushi!');
    });

    it('should return error if name is missing (invalid case)', async () => {
        const res = await request(app).get('/api/greet');
        expect(res.status).to.equal(400);
    });

});