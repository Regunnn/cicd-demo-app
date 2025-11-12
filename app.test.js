const request = require('supertest');
const { app, server } = require('./app');

describe('Application Tests', () => {
  // Close server after tests complete
  afterAll((done) => {
    server.close(done);
  });

  // Test 1: Check if main page works
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from Rehan');
  });

  // Test 2: Check if health page works
  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});