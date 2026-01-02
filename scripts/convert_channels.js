import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, '../channels.csv');
const jsonFilePath = path.join(__dirname, '../src/data/channels.json');

// Ensure data directory exists
const dataDir = path.dirname(jsonFilePath);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

try {
    const csvData = fs.readFileSync(csvFilePath, 'utf8');
    const lines = csvData.split('\n');
    // Skip header

    const channels = [];
    let idCounter = 1;

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const firstCommaIndex = line.indexOf(',');
        if (firstCommaIndex === -1) continue;

        const category = line.substring(0, firstCommaIndex).trim();
        let name = line.substring(firstCommaIndex + 1).trim();

        // Remove quotes if present
        if (name.startsWith('"') && name.endsWith('"')) {
            name = name.substring(1, name.length - 1);
        }

        // Infer Country from Category if possible
        let country = "Global";
        const lowerCat = category.toLowerCase();
        if (lowerCat.includes('arab') || lowerCat.includes('uae') || lowerCat.includes('ksa')) country = "Arab";
        else if (lowerCat.includes('uk') || lowerCat.includes('united kingdom')) country = "UK";
        else if (lowerCat.includes('usa') || lowerCat.includes('us') || lowerCat.includes('america')) country = "USA";
        else if (lowerCat.includes('fr') || lowerCat.includes('france')) country = "France";
        else if (lowerCat.includes('de') || lowerCat.includes('germany')) country = "Germany";
        else if (lowerCat.includes('it') || lowerCat.includes('italy')) country = "Italy";
        else if (lowerCat.includes('es') || lowerCat.includes('spain')) country = "Spain";
        else if (lowerCat.includes('turk')) country = "Turkey";
        else if (lowerCat.includes('can') || lowerCat.includes('canada')) country = "Canada";
        else if (lowerCat.includes('bra') || lowerCat.includes('brazil')) country = "Brazil";
        else if (lowerCat.includes('port') || lowerCat.includes('portugal')) country = "Portugal";

        channels.push({
            id: idCounter++,
            name: name,
            category: category,
            country: country,
            logo: null
        });
    }

    fs.writeFileSync(jsonFilePath, JSON.stringify(channels, null, 2));
    console.log(`Successfully converted ${channels.length} channels to ${jsonFilePath}`);

} catch (error) {
    console.error('Error converting CSV:', error);
}
