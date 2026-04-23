const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, '../public/images/logo/WhatsApp Image 2026-01-20 at 14.29.10.jpeg');
const OUT = path.join(__dirname, '../public/images/logo/logo.png');

// Tunables
const CROP_TOP_FRACTION = 0.82;   // keep the full squirrel-circle, drop the "Ardilla" wordmark below
const OUTPUT_WIDTH = 800;         // bigger for retina clarity

async function run() {
    // Pass 1: auto-orient and trim outer whitespace
    const { data: trimBuf, info: trimInfo } = await sharp(SRC)
        .rotate()
        .trim({ threshold: 15 })
        .toBuffer({ resolveWithObject: true });

    const cropHeight = Math.round(trimInfo.height * CROP_TOP_FRACTION);

    // Pass 2: crop top portion, resize larger, sharpen for clarity
    const prepped = await sharp(trimBuf)
        .extract({ left: 0, top: 0, width: trimInfo.width, height: cropHeight })
        .trim({ threshold: 15 })
        .resize({ width: OUTPUT_WIDTH, withoutEnlargement: false, kernel: 'lanczos3' })
        .sharpen({ sigma: 0.6, m1: 0.5, m2: 2.0 })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

    const { data, info } = prepped;
    const { width, height } = info;
    const total = width * height;
    const visited = new Uint8Array(total);
    const queue = new Int32Array(total);
    let head = 0, tail = 0;

    const isBg = (p) => {
        const i = p * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        return min >= 230 && (max - min) <= 15;
    };

    const seed = (p) => {
        if (!visited[p] && isBg(p)) {
            visited[p] = 1;
            queue[tail++] = p;
        }
    };

    for (let x = 0; x < width; x++) { seed(x); seed((height - 1) * width + x); }
    for (let y = 0; y < height; y++) { seed(y * width); seed(y * width + width - 1); }

    while (head < tail) {
        const p = queue[head++];
        const x = p % width;
        const y = (p - x) / width;
        if (x > 0) seed(p - 1);
        if (x < width - 1) seed(p + 1);
        if (y > 0) seed(p - width);
        if (y < height - 1) seed(p + width);
    }

    for (let p = 0; p < total; p++) {
        if (!visited[p]) continue;
        const i = p * 4;
        const min = Math.min(data[i], data[i + 1], data[i + 2]);
        const a = min >= 250 ? 0 : Math.max(0, Math.min(255, Math.round((255 - min) * 12.75)));
        data[i + 3] = a;
    }

    await sharp(data, { raw: { width, height, channels: 4 } })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(OUT);

    const size = fs.statSync(OUT).size;
    console.log(`logo.png -> ${width}x${height}, ${(size / 1024).toFixed(1)} KB`);
}

run().catch((e) => { console.error(e); process.exit(1); });
