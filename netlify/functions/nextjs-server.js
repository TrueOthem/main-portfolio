// netlify/functions/nextjs-server.js
const { createServerHandler } = require('@netlify/next');

const handler = createServerHandler({
  // The absolute path to the Next.js app
  dir: '.',
});

exports.handler = handler;
