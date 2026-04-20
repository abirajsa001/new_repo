import { setupFastify } from './server/server';

(async () => {
  console.log('🚀 Starting application...');

  try {
    const server = await setupFastify();

    const PORT = Number(process.env.PORT) || 8080;

    await server.listen({
      port: PORT,
      host: '0.0.0.0',
    });

    console.log(`✅ Server running on port ${PORT}`);
  } catch (err) {
    console.error('❌ Startup error:', err);
    process.exit(1);
  }
})();