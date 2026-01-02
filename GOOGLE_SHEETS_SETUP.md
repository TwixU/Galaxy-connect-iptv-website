# 📊 Configuration Google Sheets - Guide Complet

## 🎯 Étape 1 : Créer un nouveau Google Sheet

1. Allez sur https://sheets.google.com
2. Cliquez sur **+ Blank** pour créer un nouveau sheet
3. Nommez-le "IPTV Orders" (ou ce que vous voulez)

## 🔑 Étape 2 : Récupérer l'ID du Sheet

1. Regardez l'URL de votre Google Sheet
2. L'URL ressemble à : `https://docs.google.com/spreadsheets/d/VOTRE_ID_ICI/edit`
3. **Copiez la partie entre `/d/` et `/edit`**
4. Exemple : Si l'URL est `https://docs.google.com/spreadsheets/d/1-bA_GU70oN3Zym0pgX78bW4Fs_yL6hPrjzpkXKZyvD4/edit`
   - L'ID est : `1-bA_GU70oN3Zym0pgX78bW4Fs_yL6hPrjzpkXKZyvD4`

## 📝 Étape 3 : Configurer le Google Apps Script

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. **Supprimez** tout le code existant
3. **Ouvrez** le fichier `google-apps-script-simple.js` dans votre projet
4. **Copiez** tout le code
5. **Collez-le** dans l'éditeur Apps Script
6. **Trouvez** la ligne : `const SHEET_ID = 'VOTRE_SHEET_ID_ICI';`
7. **Remplacez** `VOTRE_SHEET_ID_ICI` par l'ID que vous avez copié à l'étape 2
8. **Sauvegardez** (Ctrl+S ou Cmd+S)

Exemple :
```javascript
const SHEET_ID = '1-bA_GU70oN3Zym0pgX78bW4Fs_yL6hPrjzpkXKZyvD4';
```

## 🚀 Étape 4 : Déployer le script

1. Cliquez sur **Deploy** (en haut à droite)
2. Sélectionnez **New deployment**
3. Cliquez sur l'icône ⚙️ à côté de "Select type"
4. Choisissez **Web app**
5. Configurez :
   - **Description** : "IPTV Orders API"
   - **Execute as** : **Me** (votre compte)
   - **Who has access** : **Anyone** ⚠️ **TRÈS IMPORTANT !**
6. Cliquez sur **Deploy**
7. **Autorisez** l'application si une fenêtre apparaît
8. **Copiez l'URL** qui s'affiche (elle ressemble à `https://script.google.com/macros/s/AKfycb.../exec`)

## 🔧 Étape 5 : Mettre à jour le fichier .env

1. Ouvrez le fichier `.env` dans votre projet
2. Remplacez l'URL existante par la nouvelle :
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/VOTRE_NOUVELLE_URL/exec
```
3. Sauvegardez le fichier
4. Le serveur redémarrera automatiquement

## ✅ Étape 6 : Tester

1. Allez sur http://localhost:5174/checkout
2. Remplissez le formulaire
3. Soumettez
4. Vérifiez votre Google Sheet - une nouvelle ligne devrait apparaître !

## 🐛 Dépannage

### Erreur 404
- Le script n'est pas déployé correctement
- Refaites un **nouveau déploiement** (pas "Manage deployments")

### Erreur 403
- "Who has access" n'est pas sur "Anyone"
- Refaites le déploiement et assurez-vous de sélectionner **"Anyone"**

### Erreur "Cannot read properties of undefined"
- L'ID du Sheet est incorrect
- Vérifiez que vous avez bien remplacé `VOTRE_SHEET_ID_ICI` par votre vrai ID

### Le script ne sauvegarde rien
- Vérifiez que l'ID du Sheet est correct
- Vérifiez que vous avez autorisé les permissions
- Regardez les logs : Apps Script > Executions

## 📊 Structure du Sheet

Le script créera automatiquement un onglet "Orders" avec ces colonnes :
- Timestamp
- Order ID
- First Name
- Last Name
- Email
- WhatsApp
- Device Type
- MAC Address
- Adult Channels
- Plan
- Devices
- Price
- Payment Status

## 🔒 Sécurité

- Le Sheet ID est dans le code du script (côté Google), pas dans votre application
- Seul le script peut accéder au Sheet
- Les données sont stockées dans votre Google Drive personnel
- Le script est déployé avec vos permissions

## 💡 Avantages de cette méthode

✅ Plus simple et plus fiable
✅ Pas besoin de `getActiveSpreadsheet()`
✅ Fonctionne même si vous avez plusieurs sheets ouverts
✅ Moins de risques d'erreurs
✅ Plus facile à déboguer
