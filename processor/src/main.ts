import Fastify from 'fastify';

(async () => {
  console.log('Minimal server booting...');

  try {
    const app = Fastify();

    app.get('/', async () => {
      return { status: 'ok' };
    });

    const PORT = Number(process.env.PORT) || 8080;

    await app.listen({
      port: PORT,
      host: '0.0.0.0',
    });

    console.log(`Running on ${PORT}`);
  } catch (err) {
    console.error('Crash:', err);
    process.exit(1);
  }
})();