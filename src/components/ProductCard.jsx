import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ZoomIn, X } from 'lucide-react'
import { useCursorTilt } from '../hooks/useCursorTilt'
import ScrollTitle from './ScrollTitle'
import './ProductCard.css'

const EASE = [0.16, 1, 0.3, 1]

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

const ProductCard = ({ product, index, reverse = false }) => {
    const [zoomed, setZoomed] = useState(false)
    const [colorIdx, setColorIdx] = useState(-1)
    const { ref: tiltRef, handlers, tilt, parallax, spotlight } = useCursorTilt({
        maxTilt: 3.5,
        maxParallax: 10,
    })

    useEffect(() => {
        if (!zoomed) return
        const onKey = (e) => e.key === 'Escape' && setZoomed(false)
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [zoomed])

    const rowRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ['start end', 'end start'],
    })

    const indexScrollY = useTransform(scrollYProgress, [0, 1], [80, -80])
    const indexOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.92, 0.92, 0])

    const spotlightPos = useMotionTemplate`${spotlight.x} ${spotlight.y}`

    const indexLabel = String(index + 1).padStart(2, '0')
    const colors = product.colors || []
    const activeColor = colorIdx >= 0 ? colors[colorIdx] : null
    const landscape = activeColor?.image || product.heroImage?.landscape || product.image
    const accent = reverse ? 'var(--sky-deep)' : 'var(--orange)'

    const specs = [
        { label: 'Weight', value: product.specifications?.weight },
        { label: 'Balance', value: product.specifications?.balance },
        { label: 'Frame', value: product.specifications?.frame },
        { label: 'Tension', value: product.specifications?.stringTension },
    ]

    return (
        <article
            ref={rowRef}
            className={`pcard ${reverse ? 'pcard--reverse' : ''}`}
            style={{ '--accent': accent }}
        >
            <motion.div
                ref={tiltRef}
                className="pcard__media"
                onMouseMove={handlers.onMouseMove}
                onMouseEnter={handlers.onMouseEnter}
                onMouseLeave={handlers.onMouseLeave}
                style={{
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                    y: tilt.translateY,
                    transformPerspective: 1200,
                }}
                initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 16px)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.15, ease: EASE }}
            >
                <div className="pcard__img-wrap">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.img
                            key={landscape}
                            src={landscape}
                            alt={`${product.name}${activeColor ? ' — ' + activeColor.name : ''}`}
                            className="pcard__img"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                        />
                    </AnimatePresence>
                </div>

                <div className="pcard__vignette" aria-hidden="true" />

                <motion.div
                    className="pcard__index-big"
                    aria-hidden="true"
                    style={{ y: indexScrollY, opacity: indexOpacity }}
                >
                    {indexLabel}
                </motion.div>

                <motion.div
                    className="pcard__spotlight"
                    style={{ backgroundPosition: spotlightPos }}
                    aria-hidden="true"
                />

                {product.badge && <span className="pcard__badge">{product.badge}</span>}

                <button
                    type="button"
                    className="pcard__zoom"
                    onClick={() => setZoomed(true)}
                    aria-label={`Zoom ${product.name} image`}
                >
                    <ZoomIn size={17} strokeWidth={2.4} />
                </button>

                <div className="pcard__chip">
                    <span>{product.specifications?.weight}</span>
                    <span className="pcard__chip-dot">●</span>
                    <span>{product.specifications?.balance}</span>
                </div>
            </motion.div>

            <AnimatePresence>
                {zoomed && (
                    <motion.div
                        className="pcard__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28, ease: EASE }}
                        onClick={() => setZoomed(false)}
                        role="dialog"
                        aria-label={`${product.name} — full image`}
                    >
                        <button
                            type="button"
                            className="pcard__lightbox-close"
                            onClick={() => setZoomed(false)}
                            aria-label="Close"
                        >
                            <X size={22} strokeWidth={2.4} />
                        </button>
                        <motion.img
                            src={landscape}
                            alt={product.name}
                            className="pcard__lightbox-img"
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.42, ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                            draggable="false"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="pcard__info"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                <motion.div className="pcard__info-head" variants={fadeUp}>
                    <span className="pcard__num">{indexLabel}</span>
                    <span className="pcard__eyebrow">{product.category}</span>
                </motion.div>

                <motion.h3
                    className="pcard__name"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.4, ease: EASE }}
                >
                    <ScrollTitle
                        text={product.name}
                        progress={scrollYProgress}
                        start={0.2}
                        end={0.7}
                        initialColor="var(--muted-soft)"
                        targetColor="var(--ink)"
                    />
                </motion.h3>

                <motion.p className="pcard__desc" variants={fadeUp}>
                    {product.description}
                </motion.p>

                {colors.length > 0 && (
                    <motion.div className="pcard__colors" variants={fadeUp}>
                        <div className="pcard__colors-head">
                            <span className="pcard__colors-label">Colourways</span>
                            <span className="pcard__colors-active">
                                {activeColor?.name || `${colors.length} finishes`}
                            </span>
                        </div>
                        <div className="pcard__colors-row">
                            {colors.map((c, i) => (
                                <button
                                    key={c.name}
                                    type="button"
                                    className={`pcard__color ${colorIdx === i ? 'is-active' : ''}`}
                                    onClick={() => setColorIdx(colorIdx === i ? -1 : i)}
                                    aria-label={c.name}
                                    aria-pressed={colorIdx === i}
                                    title={c.name}
                                >
                                    <span
                                        className="pcard__color-dot"
                                        style={{ background: c.swatch }}
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                <motion.ul className="pcard__specs" variants={fadeUp}>
                    {specs.map((s) => (
                        <li key={s.label}>
                            <span className="pcard__spec-label">{s.label}</span>
                            <strong className="pcard__spec-value">{s.value}</strong>
                        </li>
                    ))}
                </motion.ul>

                <motion.div className="pcard__footer" variants={fadeUp}>
                    <div className="pcard__price">
                        <div className="pcard__price-tile">
                            <span className="pcard__price-label">Single</span>
                            <span className="pcard__price-current">
                                ₹{product.price.toLocaleString('en-IN')}
                            </span>
                        </div>
                        <div className="pcard__price-tile pcard__price-tile--pair">
                            <span className="pcard__price-label">
                                Pair
                                {product.price * 2 - product.pairPrice > 0 && (
                                    <span className="pcard__price-badge">
                                        Save ₹{(product.price * 2 - product.pairPrice).toLocaleString('en-IN')}
                                    </span>
                                )}
                            </span>
                            <span className="pcard__price-pair">
                                ₹{product.pairPrice.toLocaleString('en-IN')}
                            </span>
                        </div>
                    </div>
                    <Link to={`/product/${product.slug}`} className="pcard__cta">
                        <span className="pcard__cta-label">View details</span>
                        <span className="pcard__cta-icon" aria-hidden="true">
                            <ArrowUpRight size={18} strokeWidth={2.4} />
                            <ArrowUpRight size={18} strokeWidth={2.4} />
                        </span>
                    </Link>
                </motion.div>
            </motion.div>
        </article>
    )
}

export default ProductCard
