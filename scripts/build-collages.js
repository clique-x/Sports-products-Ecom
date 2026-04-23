import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'studio_dark', 'portrait')
const OUT = path.join(ROOT, 'public', 'images', 'banners')

fs.mkdirSync(OUT, { recursive: true })

const collages = [
    {
        name: 'triptych_1.jpg',
        images: ['20260416_151349.jpg', '20260416_151419.jpg', '20260416_151524.jpg'],
    },
    {
        name: 'triptych_2.jpg',
        images: ['20260417_191200.jpg', '20260417_191231.jpg', '20260417_191249.jpg'],
    },
    {
        name: 'triptych_3.jpg',
        images: ['20260416_151636.jpg', '20260417_191336.jpg', '20260417_191541.jpg'],
    },
]

const PANEL_W = 1000
const PANEL_H = 1500
const BORDER = 56
const GAP = 56

const totalW = 3 * PANEL_W + 2 * GAP + 2 * BORDER
const totalH = PANEL_H + 2 * BORDER

async function build() {
    for (const c of collages) {
        const panels = await Promise.all(
            c.images.map((f) =>
                sharp(path.join(SRC, f))
                    .resize({ width: PANEL_W, height: PANEL_H, fit: 'cover', position: 'center' })
                    .toBuffer(),
            ),
        )

        const composites = panels.map((buf, i) => ({
            input: buf,
            left: BORDER + i * (PANEL_W + GAP),
            top: BORDER,
        }))

        const outPath = path.join(OUT, c.name)
        await sharp({
            create: {
                width: totalW,
                height: totalH,
                channels: 3,
                background: { r: 0, g: 0, b: 0 },
            },
        })
            .composite(composites)
            .jpeg({ quality: 86, mozjpeg: true })
            .toFile(outPath)

        console.log(`✓ ${c.name}  ${totalW}×${totalH}`)
    }
}

build().catch((e) => {
    console.error(e)
    process.exit(1)
})
