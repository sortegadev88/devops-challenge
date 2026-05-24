const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'DevOps Challenge API',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = app;