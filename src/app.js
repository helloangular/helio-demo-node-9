'use strict';
const express = require('express');
const { version } = require('../package.json');

const app = express();
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json({ service: process.env.SERVICE_NAME || 'helio-demo-node-9', version, message: 'Hello from Node.js' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

module.exports = app;
