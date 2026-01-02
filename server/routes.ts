import { Router as ExpressRouter } from 'express';
import type { IStorage } from './storage.js';
import { promises as fs } from 'fs';
import * as path from 'path';
import { supabase } from './supabase.js';

export function registerRoutes(app: ExpressRouter, _storage: IStorage) {
    // Health check
    app.get('/health', (_req, res) => {
        res.json({ status: 'ok' });
    });

    // Debug Route - Test Supabase Connection
    app.get('/test-db', async (_req, res) => {
        try {
            const { data, error } = await supabase.from('orders').select('count').single();
            if (error) throw error;
            res.json({ status: 'ok', message: 'Connected to Supabase', data });
        } catch (err: any) {
            res.status(500).json({ status: 'error', message: err.message, stack: err.stack });
        }
    });

    // Submit order
    app.post('/submit-order', async (req, res) => {
        const orderId = 'ORD-' + Date.now();
        console.log('📥 Request received for /submit-order');

        try {
            // Log the raw body to debug
            console.log('📦 Request Body:', JSON.stringify(req.body, null, 2));

            const orderData = req.body;
            if (!orderData) {
                throw new Error('Request body is empty');
            }

            const timestamp = new Date().toISOString();

            console.log('📥 Processing order:', orderId);

            // Prepare complete order data
            const completeOrder = {
                orderId,
                timestamp,
                ...orderData,
                paymentStatus: 'Pending'
            };

            // 1. Supabase (Primary Storage)
            let supabaseSuccess = false;
            let supabaseError = null;
            try {
                if (supabase) {
                    console.log('Attempting to save to Supabase...');
                    const { error } = await supabase
                        .from('orders')
                        .insert([
                            {
                                order_id: orderId,
                                first_name: orderData.firstName || '',
                                last_name: orderData.lastName || '',
                                email: orderData.email || '',
                                whatsapp: orderData.whatsapp || '',
                                country: orderData.country || '',
                                plan: orderData.plan || '',
                                price: orderData.price || '',
                                device_type: orderData.deviceType || '',
                                mac_address: orderData.macAddress || '',
                                adult_channels: !!orderData.adultChannels,
                                payment_status: 'Pending',
                                created_at: timestamp
                            }
                        ]);

                    if (error) {
                        console.error('❌ Supabase insert error:', error);
                        supabaseError = error;
                    } else {
                        console.log('✅ Saved to Supabase successfully');
                        supabaseSuccess = true;
                    }
                } else {
                    console.error('❌ Supabase client not initialized');
                    supabaseError = 'Client not initialized';
                }
            } catch (err: any) {
                console.error('❌ Supabase critical error:', err.message || err);
                supabaseError = err.message;
            }

            // 2. Local Backup (Fallback & Dev)
            let backupSuccess = false;
            try {
                const isProduction = process.env.NODE_ENV === 'production';
                const backupDir = isProduction ? '/tmp' : path.join(process.cwd(), 'server');
                const backupFile = path.join(backupDir, 'orders-backup.json');

                let orders = [];
                try {
                    const content = await fs.readFile(backupFile, 'utf-8');
                    orders = JSON.parse(content);
                } catch {
                    // Ignore read errors (file missing/empty)
                }

                orders.push(completeOrder);

                // Ensure directory exists if not in /tmp
                if (!isProduction) {
                    try {
                        await fs.mkdir(backupDir, { recursive: true });
                    } catch { }
                }

                await fs.writeFile(backupFile, JSON.stringify(orders, null, 2));
                console.log('✅ Saved to local backup:', backupFile);
                backupSuccess = true;
            } catch (err: any) {
                console.error('❌ Backup error:', err.message);
                // Don't let backup failure stop the process
            }

            // 3. Google Sheets (Secondary Backup)
            let googleSheetSuccess = false;
            const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

            if (GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
                // Check if fetch is available
                if (typeof fetch === 'function') {
                    try {
                        console.log('📤 Sending to Google Sheets...');
                        const response = await fetch(GOOGLE_SCRIPT_URL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(completeOrder),
                        });

                        if (response.ok) {
                            console.log('✅ Google Sheets success');
                            googleSheetSuccess = true;
                        } else {
                            console.warn('⚠️ Google Sheets returned status:', response.status);
                        }
                    } catch (err: any) {
                        console.error('⚠️ Google Sheets error:', err.message);
                    }
                } else {
                    console.warn('⚠️ fetch is not defined in this Node environment');
                }
            }

            // Always return success with debug info
            res.json({
                success: true,
                message: 'Order processed',
                orderId: orderId,
                savedToSupabase: supabaseSuccess,
                savedToGoogleSheets: googleSheetSuccess,
                savedToBackup: backupSuccess,
                debug: {
                    supabaseError: supabaseError
                }
            });

        } catch (error: any) {
            console.error('❌ CRITICAL SERVER ERROR:', error);
            // Return the actual error to the frontend for debugging
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                orderId: orderId,
                error: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            });
        }
    });

    // Update payment status
    app.post('/update-payment-status', async (req, res) => {
        try {
            const { orderId, status } = req.body;
            console.log('📥 Payment status update:', { orderId, status });

            const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

            if (GOOGLE_SCRIPT_URL && typeof fetch === 'function') {
                try {
                    await fetch(GOOGLE_SCRIPT_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            action: 'updatePaymentStatus',
                            orderId: orderId,
                            status: status
                        }),
                    });
                    console.log('✅ Payment status updated in Sheets');
                } catch (err) {
                    console.error('❌ Failed to update payment status in Sheets:', err);
                }
            }

            res.json({ success: true });
        } catch (error) {
            console.error('❌ Error in update-payment-status:', error);
            res.json({ success: true, warning: true }); // Always success for frontend
        }
    });

    // Get subscription plans
    app.get('/plans', (_req, res) => {
        const plans = [
            {
                id: '1-month',
                name: '1 Month',
                duration: '1 Month',
                prices: { oneDevice: 14.99, twoDevices: 25.99, threeDevices: 39.99 },
                popular: false,
                bestValue: false,
                features: ['Premium Server', '+42,000 Live IPTV Channels', '+150,000 Movies/Series', 'High Quality Stream', 'Anti Freezing', 'TV Guide (EPG)', '100% Compatibility', 'Catch-Up Feature', 'Instant activation', 'Support 24/24'],
            },
            {
                id: '3-months',
                name: '3 Months',
                duration: '3 Months',
                prices: { oneDevice: 29.99, twoDevices: 49.99, threeDevices: 69.99 },
                popular: true,
                bestValue: false,
                features: ['Premium Server', '+42,000 Live IPTV Channels', '+150,000 Movies/Series', 'High Quality Stream', 'Anti Freezing', 'TV Guide (EPG)', '100% Compatibility', 'Catch-Up Feature', 'Instant activation', 'Support 24/24'],
            },
            {
                id: '6-months',
                name: '6 Months',
                duration: '6 Months',
                prices: { oneDevice: 49.99, twoDevices: 65.99, threeDevices: 99.99 },
                popular: false,
                bestValue: false,
                features: ['Premium Server', '+42,000 Live IPTV Channels', '+150,000 Movies/Series', 'High Quality Stream', 'Anti Freezing', 'TV Guide (EPG)', '100% Compatibility', 'Catch-Up Feature', 'Instant activation', 'Support 24/24'],
            },
            {
                id: '1-year',
                name: '1 Year',
                duration: '12 Months',
                prices: { oneDevice: 69.99, twoDevices: 89.99, threeDevices: 129.99 },
                popular: false,
                bestValue: true,
                features: ['Premium Server', '+42,000 Live IPTV Channels', '+150,000 Movies/Series', 'High Quality Stream', 'Anti Freezing', 'TV Guide (EPG)', '100% Compatibility', 'Catch-Up Feature', 'Instant activation', 'Support 24/24'],
            },
        ];
        res.json(plans);
    });

    // Get testimonials
    app.get('/testimonials', (_req, res) => {
        const testimonials = [
            { id: 1, name: 'John Smith', rating: 5, comment: 'Amazing service! Crystal clear streams and excellent customer support. Highly recommended!', date: '2024-01-15' },
            { id: 2, name: 'Sarah Johnson', rating: 5, comment: 'Best IPTV service I\'ve ever used. No buffering, tons of channels, and great value for money.', date: '2024-01-10' },
            { id: 3, name: 'Michael Brown', rating: 5, comment: 'Incredible quality and reliability. The sports channels are fantastic!', date: '2024-01-05' },
            { id: 4, name: 'Emily Davis', rating: 5, comment: 'Very satisfied with the service. Setup was easy and support team is very helpful.', date: '2023-12-28' },
            { id: 5, name: 'David Wilson', rating: 5, comment: 'Great selection of movies and series. The catch-up feature is a game changer!', date: '2023-12-20' },
            { id: 6, name: 'Lisa Anderson', rating: 5, comment: 'Outstanding service! Works perfectly on all my devices. Worth every penny.', date: '2023-12-15' },
        ];
        res.json(testimonials);
    });
}
