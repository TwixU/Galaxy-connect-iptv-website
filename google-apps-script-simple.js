// ==========================================
// GOOGLE APPS SCRIPT CODE (SIMPLE & ROBUST)
// ==========================================
// INSTRUCTIONS:
// 1. Créez un nouveau Google Sheet
// 2. Copiez l'ID du Sheet depuis l'URL (la partie entre /d/ et /edit)
//    Exemple: https://docs.google.com/spreadsheets/d/VOTRE_ID_ICI/edit
// 3. Remplacez 'VOTRE_SHEET_ID_ICI' ci-dessous par votre ID
// 4. Extensions > Apps Script
// 5. Collez ce code
// 6. Deploy > New deployment > Web app
// 7. Who has access: "Anyone"
// 8. Copiez l'URL de déploiement

// ⚠️ REMPLACEZ CET ID PAR VOTRE ID DE GOOGLE SHEET
const SHEET_ID = '1VY49i28tT95MP78j663jl4QepQRtEiW44TTbGWEY_qQ';

function doPost(e) {
    try {
        // Parse les données reçues
        var data = JSON.parse(e.postData.contents);

        // Ouvre le Google Sheet par son ID
        var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        var sheet = spreadsheet.getSheetByName('Orders');

        // Crée l'onglet "Orders" s'il n'existe pas
        if (!sheet) {
            sheet = spreadsheet.insertSheet('Orders');
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

        // Génère un Order ID unique
        var orderId = 'ORD-' + Date.now();
        var timestamp = new Date().toLocaleString();

        // Formate le nom du plan
        var planName = data.plan || 'Unknown';
        if (planName === '1mo' || planName === '1-month') planName = '1 Month';
        if (planName === '3mo' || planName === '3-months') planName = '3 Months';
        if (planName === '6mo' || planName === '6-months') planName = '6 Months';
        if (planName === '12mo' || planName === '1-year') planName = '12 Months';

        // Formate le nombre d'appareils
        var deviceCount = data.devices ? (data.devices + (data.devices === '1' ? ' Device' : ' Devices')) : '1 Device';

        // Ajoute la ligne dans le Sheet
        sheet.appendRow([
            timestamp,
            orderId,
            data.firstName || '',
            data.lastName || '',
            data.email || '',
            data.whatsapp || '',
            data.deviceType || '',
            data.macAddress || '',
            data.adultChannels ? 'Yes' : 'No',
            planName,
            deviceCount,
            '$' + (data.price || '0'),
            'Pending'
        ]);

        // Retourne une réponse de succès
        return ContentService.createTextOutput(JSON.stringify({
            success: true,
            message: 'Order saved successfully',
            orderId: orderId
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Log l'erreur et retourne un message d'erreur
        Logger.log('Error: ' + error.toString());
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

// Fonction pour tester que le script fonctionne (accessible via GET)
function doGet(e) {
    return ContentService.createTextOutput(JSON.stringify({
        status: 'running',
        message: 'IPTV Orders API is active',
        timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
}

// Fonction pour mettre à jour le statut de paiement
function updatePaymentStatus(orderId, status) {
    try {
        var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
        var sheet = spreadsheet.getSheetByName('Orders');

        if (!sheet) {
            return { success: false, error: 'Orders sheet not found' };
        }

        var data = sheet.getDataRange().getValues();

        // Cherche la ligne avec cet Order ID (colonne B, index 1)
        for (var i = 1; i < data.length; i++) {
            if (data[i][1] === orderId) {
                // Met à jour le statut (colonne M, index 12)
                sheet.getRange(i + 1, 13).setValue(status);
                return { success: true, message: 'Payment status updated' };
            }
        }

        return { success: false, error: 'Order ID not found' };

    } catch (error) {
        Logger.log('Error updating payment status: ' + error.toString());
        return { success: false, error: error.toString() };
    }
}
