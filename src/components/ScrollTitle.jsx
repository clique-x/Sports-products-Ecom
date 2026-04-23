import { motion, useTransform } from 'framer-motion'

const ScrollChar = ({ ch, progress, start, end, initial, target }) => {
    const p = useTransform(progress, [start, end], [0, 1], { clamp: true })
    const color = useTransform(p, [0, 1], [initial, target])
    return (
        <motion.span className="stitle__char" style={{ color }}>
            {ch === ' ' ? ' ' : ch}
        </motion.span>
    )
}

const ScrollTitle = ({
    text,
    progress,
    start = 0.15,
    end = 0.75,
    initialColor = 'var(--muted-soft, #b3b3b3)',
    targetColor = 'var(--ink, #0d0d0d)',
    className = '',
}) => {
    const chars = [...text]
    const span = end - start
    const step = span / chars.length

    return (
        <span className={`stitle ${className}`} aria-label={text}>
            <span aria-hidden="true">
                {chars.map((ch, i) => (
                    <ScrollChar
                        key={`${ch}-${i}`}
                        ch={ch}
                        progress={progress}
                        start={start + i * step}
                        end={start + (i + 1) * step + step * 0.6}
                        initial={initialColor}
                        target={targetColor}
                    />
                ))}
            </span>
        </span>
    )
}

export default ScrollTitle
