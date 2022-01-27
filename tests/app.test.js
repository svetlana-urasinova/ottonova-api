import 'regenerator-runtime/runtime';
import app from '../modules/app.js';

describe('/api/cities', () => {
    const request = require('supertest');

    it('Should return cities data', async () => {
        const res = await request(app)
            .get('/api/cities');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cities');
    });
});