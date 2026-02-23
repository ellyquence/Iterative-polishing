const express = require('express');
const { buildResponse, sanitize, validateRequired } = require('../utils/helpers');
const config = require('../config');

const router = express.Router();

// In-memory store for demo purposes
const userData = [];

router.get('/', (req, res) => {
  console.log(`[${config.DB_QUERY_LOG_LEVEL}] Fetching home page`);
  res.json(buildResponse({ message: 'Welcome to Polish Test App', version: '1.0.0' }));
});

router.get('/users', (req, res) => {
  console.log(`[${config.DB_QUERY_LOG_LEVEL}] Querying all users`);
  res.json(buildResponse(userData));
});

router.post('/users', (req, res) => {
  const { name, email } = req.body || {};
  const validation = validateRequired({ name, email }, ['name', 'email']);
  if (!validation.valid) {
    return res.status(400).json(buildResponse(null, `Missing fields: ${validation.missing.join(', ')}`));
  }

  const user = {
    id: userData.length + 1,
    name: sanitize(name),
    email: sanitize(email),
    createdAt: new Date().toISOString(),
  };
  userData.push(user);
  console.log(`[${config.DB_QUERY_LOG_LEVEL}] Created user ${user.id}`);
  res.status(201).json(buildResponse(user));
});

router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userData.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json(buildResponse(null, 'Not found'));
  }
  console.log(`[${config.DB_QUERY_LOG_LEVEL}] Fetched user ${id}`);
  res.json(buildResponse(user));
});

router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = userData.findIndex((u) => u.id === id);
  if (idx === -1) {
    return res.status(404).json(buildResponse(null, 'Not found'));
  }
  const removed = userData.splice(idx, 1)[0];
  console.log(`[${config.DB_QUERY_LOG_LEVEL}] Deleted user ${id}`);
  res.json(buildResponse(removed));
});

module.exports = router;
