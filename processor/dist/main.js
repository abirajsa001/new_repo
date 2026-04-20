"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
(async () => {
    console.log(' Minimal test starting');
    const app = (0, fastify_1.default)();
    app.get('/', async () => {
        return { ok: true };
    });
    const PORT = Number(process.env.PORT) || 8080;
    try {
        await app.listen({ port: PORT, host: '0.0.0.0' });
        console.log(' Minimal server running');
    }
    catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
})();
