# Guide de Débogage - Formulaire Google Sheets

## 🔍 Comment tester la sauvegarde

### Étape 1: Ouvrir la Console du Navigateur
1. Ouvrez votre site dans le navigateur
2. Appuyez sur **F12** (ou Cmd+Option+I sur Mac)
3. Allez dans l'onglet **Console**

### Étape 2: Remplir le Formulaire
1. Allez sur la page `/checkout`
2. Remplissez tous les champs du formulaire
3. Cliquez sur "Proceed to Payment"

### Étape 3: Vérifier les Logs
Vous devriez voir dans la console :

```
🔵 Form submission started
Form data: { firstName: "...", lastName: "...", ... }
Plan: 1mo Devices: 1 Price: 14.99
✅ Form validation passed
📤 Sending order data to backend: { ... }
📥 Backend response status: 200
📥 Backend response data: { success: true, ... }
✅ Order submitted successfully, opening checkout
```

### Étape 4: Vérifier Google Sheets
1. Ouvrez votre Google Sheet
2. Vérifiez l'onglet "Orders"
3. Une nouvelle ligne devrait apparaître avec les données

## ❌ Problèmes Possibles

### Si vous voyez "❌ Form validation failed"
- Vérifiez que tous les champs obligatoires sont remplis
- Vérifiez que l'email est valide
- Vérifiez que le WhatsApp est au bon format

### Si vous voyez "⚠️ Backend submission failed"
- Vérifiez les logs du serveur (terminal où tourne `npm run dev:all`)
- Le serveur devrait afficher des logs détaillés

### Si le backend répond 404
- Le Google Apps Script n'est pas déployé correctement
- Vérifiez que `GOOGLE_SCRIPT_URL` dans `.env` est correct
- Redéployez le script avec "Anyone" access

### Si le backend répond 200 mais rien dans le Sheet
- Vérifiez que vous regardez le bon Google Sheet
- Vérifiez l'onglet "Orders" (pas Sheet1)
- Actualisez la page du Google Sheet

## 🧪 Test Manuel Rapide

Exécutez dans le terminal :
```bash
node test-google-sheets.js
```

Cela teste directement la connexion Google Sheets.

## 📞 Informations à Fournir

Si le problème persiste, fournissez :
1. Les logs de la console du navigateur (copier-coller)
2. Les logs du terminal serveur
3. Une capture d'écran de votre Google Sheet
4. Le statut HTTP de la réponse backend
