// Test file for index.ts

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&height=500&width=500'
        );
        expect(response.status).toBe(200);
    });
});
