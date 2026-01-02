#!/usr/bin/env node

/**
 * Google Sheets Connection Diagnostic Tool
 * Run this to test your Google Apps Script connection
 */

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyjX6x2phSEgihuXxYguO3tkXrBVeCKDHSZkpt7Lp5AJ5GCY3CNsee0QkzYxitmZuzXbQ/exec';

console.log('🔍 Google Sheets Connection Diagnostic Tool\n');
console.log('Testing URL:', GOOGLE_SCRIPT_URL);
console.log('─'.repeat(60));

// Test data
const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    whatsapp: '+1234567890',
    deviceType: 'Android Box',
    macAddress: '00:00:00:00:00:00',
    adultChannels: false,
    plan: '1mo',
    devices: '1',
    price: '14.99'
};

async function testConnection() {
    try {
        console.log('\n📤 Sending test data...');
        console.log('Data:', JSON.stringify(testData, null, 2));

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
            redirect: 'follow'
        });

        console.log('\n📥 Response received:');
        console.log('Status:', response.status, response.statusText);
        console.log('Headers:', Object.fromEntries(response.headers.entries()));

        const responseText = await response.text();
        console.log('Body:', responseText);

        if (response.ok) {
            console.log('\n✅ SUCCESS! Connection is working.');
            try {
                const json = JSON.parse(responseText);
                console.log('Parsed response:', json);
            } catch (e) {
                console.log('⚠️  Response is not JSON, but request succeeded');
            }
        } else {
            console.log('\n❌ ERROR! Status code:', response.status);

            if (response.status === 404) {
                console.log('\n🔧 TROUBLESHOOTING 404 ERROR:');
                console.log('1. Make sure you deployed the script as a WEB APP');
                console.log('2. In Google Apps Script, click "Deploy" > "New deployment"');
                console.log('3. Select type: "Web app"');
                console.log('4. Execute as: "Me"');
                console.log('5. Who has access: "Anyone" (CRITICAL!)');
                console.log('6. Copy the NEW deployment URL');
                console.log('7. Update GOOGLE_SCRIPT_URL in .env file');
            } else if (response.status === 401 || response.status === 403) {
                console.log('\n🔧 TROUBLESHOOTING PERMISSION ERROR:');
                console.log('1. The script must be deployed with "Anyone" access');
                console.log('2. Check if you\'re using a Google Workspace account');
                console.log('3. Workspace admins may restrict external access');
                console.log('4. Try using a personal @gmail.com account instead');
            }
        }

    } catch (error) {
        console.log('\n❌ NETWORK ERROR!');
        console.log('Error:', error.message);
        console.log('\n🔧 TROUBLESHOOTING:');
        console.log('1. Check your internet connection');
        console.log('2. Verify the URL is correct');
        console.log('3. Make sure the script is deployed');
    }
}

console.log('\n🚀 Starting test...');
testConnection().then(() => {
    console.log('\n' + '─'.repeat(60));
    console.log('Test complete!');
}).catch(err => {
    console.error('Unexpected error:', err);
    process.exit(1);
});
