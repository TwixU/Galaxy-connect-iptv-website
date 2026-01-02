// ==========================================
// GOOGLE APPS SCRIPT CODE (V4 - WITH PAYMENT STATUS)
// ==========================================
// 1. Go to your Google Sheet
// 2. Click Extensions > Apps Script
// 3. Delete everything and paste this code
// 4. Click Deploy > New deployment
// 5. Select type: Web app
// 6. Who has access: "Anyone" (CRITICAL!)
// 7. Click Deploy and copy the NEW URL

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        // Validate that we have POST data
        if (!e || !e.postData || !e.postData.contents) {
            return ContentService.createTextOutput(JSON.stringify({
                success: false,
                error: 'No POST data received. This script must be called via HTTP POST.'
            })).setMimeType(ContentService.MimeType.JSON);
        }

        const data = JSON.parse(e.postData.contents);

        // Check if this is a payment status update
        if (data.action === 'updatePaymentStatus') {
            return updatePaymentStatus(data);
        }

        // Otherwise, it's a new order submission
        return createNewOrder(data);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString(),
            stack: error.stack
        })).setMimeType(ContentService.MimeType.JSON);

    } finally {
        lock.releaseLock();
    }
}

function createNewOrder(data) {
    const doc = SpreadsheetApp.getActiveSpreadsheet();

    // Target a specific sheet named "Orders" or create it if it doesn't exist
    let sheet = doc.getSheetByName('Orders');
    if (!sheet) {
        sheet = doc.insertSheet('Orders');
        // Add headers if new sheet
        sheet.appendRow([
            'Timestamp',
            'Order ID',
            'First Name',
            'Last Name',
            'Email',
            'WhatsApp',
            'Device Type',
            'MAC Address',
            'Adult Channels',
            'Plan',
            'Devices',
            'Price',
            'Payment Status'
        ]);
    }

    const timestamp = new Date().toLocaleString();
    const orderId = 'ORD-' + Date.now();

    // Format Plan Name
    let planName = data.plan || 'Unknown';
    if (planName === '1mo' || planName === '1-month') planName = '1 Month';
    if (planName === '3mo' || planName === '3-months') planName = '3 Months';
    if (planName === '6mo' || planName === '6-months') planName = '6 Months';
    if (planName === '12mo' || planName === '1-year') planName = '12 Months';
    if (planName === 'lifetime') planName = 'Lifetime';

    // Format Devices
    const deviceCount = data.devices ? (data.devices + (data.devices === '1' ? ' Device' : ' Devices')) : '1 Device';

    const rowData = [
        timestamp,
        orderId,
        data.firstName,
        data.lastName,
        data.email,
        data.whatsapp || '',
        data.deviceType,
        data.macAddress,
        data.adultChannels ? 'Yes' : 'No',
        planName,
        deviceCount,
        '$' + data.price,
        'Pending'  // Initial status
    ];

    sheet.appendRow(rowData);

    return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Order saved to Orders sheet',
        orderId: orderId,
        row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
}

function updatePaymentStatus(data) {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName('Orders');
    if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: 'Orders sheet not found'
        })).setMimeType(ContentService.MimeType.JSON);
    }

    const orderId = data.orderId;
    const newStatus = data.status; // 'Success' or 'Failed'

    // Find the row with this orderId
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();

    for (let i = 1; i < values.length; i++) { // Start at 1 to skip header
        if (values[i][1] === orderId) { // Column B (index 1) is Order ID
            sheet.getRange(i + 1, 13).setValue(newStatus); // Column M (index 13) is Payment Status
            return ContentService.createTextOutput(JSON.stringify({
                success: true,
                message: 'Payment status updated to ' + newStatus
            })).setMimeType(ContentService.MimeType.JSON);
        }
    }

    return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Order ID not found'
    })).setMimeType(ContentService.MimeType.JSON);
}

function setup() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName('Orders');
    if (!sheet) {
        sheet = doc.insertSheet('Orders');
        sheet.appendRow([
            'Timestamp', 'Order ID', 'First Name', 'Last Name', 'Email', 'WhatsApp',
            'Device Type', 'MAC Address', 'Adult Channels', 'Plan', 'Devices', 'Price', 'Payment Status'
        ]);
    }
    SpreadsheetApp.getUi().alert('Ready! Sheet "Orders" created/found in: ' + doc.getName());
}
