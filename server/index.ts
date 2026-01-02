import 'dotenv/config';
import express, { type Express } from 'express';
import { registerRoutes } from './routes.js';
import { registerAdminRoutes } from './admin-routes.js';
import { MemStorage } from './storage.js';

const app: Express = express();
const PORT = process.env.PORT || 3000;

console.log('🚀 Starting server...');
console.log('📁 Environment variables loaded');
console.log('🔗 GOOGLE_SCRIPT_URL:', process.env.GOOGLE_SCRIPT_URL ? 'Configured ✅' : 'Not configured ❌');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration removed for Vercel compatibility
app.set('trust proxy', 1);

// Initialize storage
const storage = new MemStorage();

// Create API router
const apiRouter = express.Router();
registerRoutes(apiRouter, storage);
registerAdminRoutes(apiRouter);

// Mount API routes
app.use('/api', apiRouter);

// Global error handler (must be after all routes)
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('❌ Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// Start server
if (process.env.NODE_ENV !== 'production') {
    const server = app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });

    // Prevent socket hang up errors
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

export default app;
