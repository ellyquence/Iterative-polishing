const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  test('returns HTML with app title', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Polish Test App');
  });
});

describe('GET /api/', () => {
  test('returns welcome message', async () => {
    const res = await request(app).get('/api/');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.message).toContain('Welcome');
  });
});

describe('POST /api/users', () => {
  test('creates a user with valid data', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Alice', email: 'alice@example.com' });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('Alice');
  });

  test('rejects user with missing fields', async () => {
    const res = await request(app).post('/api/users').send({ name: 'Bob' });
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toContain('email');
  });
});

describe('GET /api/users/:id', () => {
  test('returns 404 for non-existent user', async () => {
    const res = await request(app).get('/api/users/9999');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Not found');
  });
});

describe('404 handler', () => {
  test('returns 404 for unknown routes', async () => {
    const res = await request(app).get('/nonexistent');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Not found');
  });
});

describe('GET /api/users', () => {
  test('returns list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
