'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

async function get(path) {
  const server = app.listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://127.0.0.1:${port}${path}`);
    return { status: res.status, body: await res.json() };
  } finally {
    server.close();
  }
}

test('GET /health reports UP', async () => {
  const { status, body } = await get('/health');
  assert.equal(status, 200);
  assert.equal(body.status, 'UP');
});

test('GET / returns the service version', async () => {
  const { status, body } = await get('/');
  assert.equal(status, 200);
  assert.equal(body.version, require('../package.json').version);
});
