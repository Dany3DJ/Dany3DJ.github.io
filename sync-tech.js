const fs = require('fs');
const path = require('path');

const ICON_DIR = path.join(__dirname, 'assets/icons/tech');
const OUTPUT_FILE = path.join(ICON_DIR, 'tech-list.json');

function capitalize(name) {
    if (name === 'openai') return 'OpenAI';
    if (name === 'n8n') return 'n8n';
    if (name === 'powerbi') return 'PowerBI';
    return name.charAt(0).toUpperCase() + name.slice(1);
}

try {
    if (!fs.existsSync(ICON_DIR)) {
        console.error(`Error: Directory not found: ${ICON_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(ICON_DIR);
    const techItems = files
        .filter(file => file.endsWith('.svg'))
        .map(file => {
            const name = path.parse(file).name;
            return {
                id: name,
                name: capitalize(name),
                icon: `assets/icons/tech/${file}`
            };
        });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(techItems, null, 4));
    console.log(`Successfully synced ${techItems.length} icons to ${OUTPUT_FILE}`);
    console.table(techItems);

} catch (error) {
    console.error('Error syncing tech icons:', error);
}
