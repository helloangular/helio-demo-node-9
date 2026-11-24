# helio-demo-node-9

A small Express API on Node.js: `GET /` and `GET /health`, port 8080 (`PORT` overrides it).

- Run: `npm ci && npm start`
- Test: `npm ci && npm test` (Node's built-in test runner)
- Container: multi-stage `Dockerfile` on a digest-pinned `node:22-alpine` image, running as the `node` user.

Delivery is set up by Apex and Helio; this repository has no workflow until Helio publishes one.
