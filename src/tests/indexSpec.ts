// Test file for index.ts

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      'Please provide a file with dimensions to continue..'
    );
  });
  it('asks for query params if not provided', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Please provide proper query parameters');
  });
  it('gets resized image when proper params provided', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&height=500&width=500'
    );
    expect(response.status).toBe(200);
    expect(response.type).toBe('image/jpg');
  });
  it('gets gets error when input file not present', async () => {
    const response = await request.get(
      '/api/images?filename=abc&height=500&width=500'
    );
    expect(response.status).toBe(200);
    expect(response.text).toBe('Error: Input file is missing, Please provide filename available in assets & proper dimensions');
  });
});
