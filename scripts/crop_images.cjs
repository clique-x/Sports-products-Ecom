const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '../studio_dark/square');
const DEST_BASE = path.join(__dirname, '../public/images/products');

const directories = {
    ardilla: path.join(DEST_BASE, 'ardilla'),
    jointless: path.join(DEST_BASE, 'ardilla-jointless')
};

// Create destination directories if they don't exist
Object.values(directories).forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

async function processImages() {
    try {
        const files = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
        
        console.log(`Found ${files.length} images to process...`);
        
        for (const file of files) {
            const inputPath = path.join(SOURCE_DIR, file);
            let targetDir;
            
            // Map 16th to Ardilla (joint-based) and 17th to Jointless
            if (file.includes('20260416')) {
                targetDir = directories.ardilla;
            } else if (file.includes('20260417')) {
                targetDir = directories.jointless;
            } else {
                console.log(`Skipping ${file} - Unknown date mapping`);
                continue;
            }
            
            const outputPath = path.join(targetDir, file);
            
            console.log(`Processing ${file}...`);
            await sharp(inputPath)
                .trim({ threshold: 15 }) // Smart crop based on background
                // Try applying a very dark background trimming just in case threshold is too strict
                .toFile(outputPath);
                
            console.log(`Saved: ${outputPath}`);
        }
        console.log("All images processed successfully!");
    } catch (err) {
        console.error("Error processing images:", err);
    }
}

processImages();
