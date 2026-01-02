import { Router } from 'express';
import { promises as fs } from 'fs';
import * as path from 'path';
import { supabase } from './supabase.js';

export function registerAdminRoutes(router: Router) {
    // Admin credentials (in production, use environment variables and hashing)
    const ADMIN_TOKEN = 'admin-session-token-' + Date.now();
    // Admin Login (temporarily without password)
    router.post('/admin/login', (_req, res) => {
        try {
            console.log('📝 Admin login attempt - no password required');
            // Always allow access for now
            res.json({ success: true, token: ADMIN_TOKEN });
        } catch (error) {
            console.error('❌ Login error:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    });

    // Get Orders
    router.get('/admin/orders', async (_req, res) => {
        try {
            let orders = [];

            // 1. Try Supabase first
            try {
                const { data, error } = await supabase
                    .from('orders')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (!error && data) {
                    // Map Supabase data to frontend format
                    orders = data.map((order: any) => ({
                        orderId: order.order_id,
                        firstName: order.first_name,
                        lastName: order.last_name,
                        email: order.email,
                        whatsapp: order.whatsapp,
                        country: order.country,
                        plan: order.plan,
                        price: order.price,
                        paymentStatus: order.payment_status,
                        timestamp: order.created_at,
                        deviceType: order.device_type
                    }));
                    console.log(`✅ Fetched ${orders.length} orders from Supabase`);
                    return res.json(orders);
                } else if (error) {
                    console.error('⚠️ Supabase fetch error:', error.message);
                }
            } catch (err) {
                console.error('⚠️ Supabase fetch error (catch block):', err);
            }

            // 2. Fallback to local file (for legacy/backup data)
            console.log('ℹ️ Falling back to local orders file...');
            const isProduction = process.env.NODE_ENV === 'production';
            const backupDir = isProduction ? '/tmp' : path.join(process.cwd(), 'server');
            const backupFile = path.join(backupDir, 'orders-backup.json');

            try {
                const content = await fs.readFile(backupFile, 'utf-8');
                orders = JSON.parse(content);
            } catch {
                // If file doesn't exist or is empty, return empty array
                console.log('ℹ️ No orders file found at:', backupFile);
                orders = [];
            }

            // Sort by timestamp descending (newest first)
            orders.sort((a: any, b: any) => {
                return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
            });

            res.json(orders);
        } catch (error) {
            console.error('❌ Error fetching orders:', error);
            res.status(500).json({ success: false, message: 'Failed to fetch orders' });
        }
    });
}
