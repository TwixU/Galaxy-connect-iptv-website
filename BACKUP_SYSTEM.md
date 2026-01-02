# Orders Backup System

## 📁 Fichier de sauvegarde

**Emplacement** : `server/orders-backup.json`

Ce fichier contient toutes les commandes soumises via le formulaire, qu'elles aient été sauvegardées dans Google Sheets ou non.

## 🔄 Fonctionnement

1. **Tentative Google Sheets** : Le système essaie d'abord de sauvegarder dans Google Sheets
2. **Sauvegarde locale automatique** : Chaque commande est TOUJOURS sauvegardée dans `orders-backup.json`
3. **Aucune perte de données** : Même si Google Sheets échoue, les données sont conservées

## 📊 Format des données

```json
[
  {
    "orderId": "ORD-1732118400000",
    "timestamp": "2025-11-20T16:00:00.000Z",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "whatsapp": "+1234567890",
    "deviceType": "Android Box",
    "macAddress": "00:00:00:00:00:00",
    "adultChannels": false,
    "plan": "3-months",
    "devices": "1",
    "price": "29.99",
    "paymentStatus": "Pending"
  }
]
```

## 📥 Récupération des données

### Option 1 : Consulter le fichier directement
Ouvrez `server/orders-backup.json` pour voir toutes les commandes.

### Option 2 : Importer dans Google Sheets
1. Ouvrez le fichier `orders-backup.json`
2. Copiez le contenu
3. Allez sur https://www.convertcsv.com/json-to-csv.htm
4. Collez le JSON et convertissez en CSV
5. Importez le CSV dans Google Sheets

### Option 3 : Script d'import automatique
Créez un script pour importer automatiquement les données du backup vers Google Sheets.

## 🔒 Sécurité

- Le fichier est stocké sur le serveur (pas accessible publiquement)
- Contient des données sensibles (emails, numéros de téléphone)
- **Ne pas commiter ce fichier dans Git** (déjà dans .gitignore)

## 🧹 Maintenance

Pour archiver les anciennes commandes :
```bash
# Renommer le fichier actuel
mv server/orders-backup.json server/orders-backup-2025-11.json

# Un nouveau fichier sera créé automatiquement
```
