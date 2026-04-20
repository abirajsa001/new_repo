import Fastify from 'fastify';

(async () => {
  console.log(' Minimal test starting');

  const app = Fastify();

  app.get('/', async () => {
    return { ok: true };
  });

  const PORT = Number(process.env.PORT) || 8080;

  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(' Minimal server running');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();