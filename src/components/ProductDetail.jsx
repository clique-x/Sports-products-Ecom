import { useLayoutEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Check, Shield, Truck, RotateCcw, ArrowUpRight, Star } from 'lucide-react'
import { getProductBySlug } from '../data/products'
import Testimonials from './Testimonials'
import './ProductDetail.css'

const ProductDetail = () => {
    const { slug } = useParams()
    const product = getProductBySlug(slug)
    const [active, setActive] = useState(0)
    const [activeColor, setActiveColor] = useState(null)

    useLayoutEffect(() => {
        if (window.__lenis) {
            window.__lenis.scrollTo(0, { immediate: true, force: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [slug])

    if (!product) {
        return (
            <div className="pd-missing">
                <div className="container">
                    <h1 className="h1">Product not found.</h1>
                    <p className="lead">The racket you're looking for doesn't exist — at least not in this century.</p>
                    <Link to="/" className="btn btn-dark">
                        <ArrowLeft size={16} />
                        Back to home
                    </Link>
                </div>
            </div>
        )
    }

    const images = product.images && product.images.length > 0 ? product.images : [product.image]
    const stageSrc = activeColor !== null && product.colors ? product.colors[activeColor].image : images[active]
    const colorName = activeColor !== null && product.colors ? product.colors[activeColor].name : null
    const whatsappSubject = colorName ? `${product.name} — ${colorName}` : product.name
    const whatsappLink = `https://wa.me/916399561515?text=Hi%20Ardilla%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(whatsappSubject)}`
    const pairSaving = product.price * 2 - product.pairPrice

    return (
        <div className="pd">
            <div className="pd__topbar container">
                <Link to="/" className="pd__back">
                    <ArrowLeft size={16} strokeWidth={2.5} />
                    <span>Back</span>
                </Link>
                <div className="pd__crumbs micro">
                    <Link to="/">Ardilla</Link>
                    <span>/</span>
                    <span>{product.category}</span>
                    <span>/</span>
                    <span className="pd__crumb-current">{product.name}</span>
                </div>
            </div>

            <section className="pd__hero">
                <div className="container pd__hero-grid">
                    <motion.div
                        className="pd__gallery"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="pd__stage">
                            {product.badge && <span className="pd__badge">{product.badge}</span>}
                            <AnimatePresence mode="sync">
                                <motion.img
                                    key={stageSrc}
                                    src={stageSrc}
                                    alt={colorName ? `${product.name} — ${colorName}` : product.name}
                                    className="pd__stage-img"
                                    initial={{ opacity: 0, scale: 1.03 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </AnimatePresence>
                        </div>
                        <div className="pd__thumbs">
                            {images.map((src, i) => (
                                <button
                                    key={i}
                                    className={`pd__thumb ${activeColor === null && active === i ? 'is-active' : ''}`}
                                    onClick={() => { setActive(i); setActiveColor(null) }}
                                    aria-label={`View image ${i + 1}`}
                                >
                                    <img src={src} alt="" />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="pd__info"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="eyebrow">{product.category}</span>
                        <h1 className="h1 pd__title">{product.name}</h1>

                        <div className="pd__rating">
                            <div className="pd__stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <span className="pd__rating-val">{product.rating}</span>
                            <span className="pd__rating-count">({product.reviews} reviews)</span>
                        </div>

                        <p className="pd__desc">{product.description}</p>

                        <div className="pd__features">
                            {product.features.map((f, i) => (
                                <span key={i} className="tag">{f}</span>
                            ))}
                        </div>

                        {product.colors && product.colors.length > 0 && (
                            <div className="pd__colors">
                                <div className="pd__colors-head">
                                    <span className="pd__colors-label">
                                        Colour · {product.colors.length} finish
                                        {product.colors.length === 1 ? '' : 'es'}
                                    </span>
                                    <span className="pd__colors-value">{colorName || 'Tap to preview'}</span>
                                </div>
                                <div className="pd__color-cards">
                                    {product.colors.map((c, i) => (
                                        <button
                                            key={c.name}
                                            type="button"
                                            className={`pd__color-card ${activeColor === i ? 'is-active' : ''}`}
                                            onClick={() => setActiveColor(activeColor === i ? null : i)}
                                            aria-label={c.name}
                                            aria-pressed={activeColor === i}
                                            title={c.name}
                                            style={{ '--swatch': c.swatch }}
                                        >
                                            <span className="pd__color-card-dot" aria-hidden="true" />
                                            <span className="pd__color-card-name">{c.name}</span>
                                            <span
                                                className="pd__color-card-check"
                                                aria-hidden="true"
                                            >
                                                <Check size={12} strokeWidth={3} />
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pd__price">
                            <div className="pd__price-row">
                                <span className="pd__price-label">Single</span>
                                <span className="pd__price-current">₹{product.price.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="pd__price-row">
                                <span className="pd__price-label">Pair</span>
                                <span className="pd__price-pair">₹{product.pairPrice.toLocaleString('en-IN')}</span>
                            </div>
                            {pairSaving > 0 && (
                                <span className="pd__price-save">Save ₹{pairSaving.toLocaleString('en-IN')} on pair</span>
                            )}
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg pd__buy"
                        >
                            Order on WhatsApp
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </a>

                        <div className="pd__guarantees">
                            <div className="pd__guarantee">
                                <Shield size={16} strokeWidth={2} />
                                <span>2-year warranty</span>
                            </div>
                            <div className="pd__guarantee">
                                <Truck size={16} strokeWidth={2} />
                                <span>Free India shipping</span>
                            </div>
                            <div className="pd__guarantee">
                                <RotateCcw size={16} strokeWidth={2} />
                                <span>30-day returns</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pd__specs section">
                <div className="container">
                    <div className="pd__section-header">
                        <span className="eyebrow">Technical sheet</span>
                        <h2 className="h1">Specifications.</h2>
                    </div>
                    <dl className="pd__specs-table">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="pd__spec-row">
                                <dt>{key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="pd__highlights section">
                <div className="container">
                    <div className="pd__section-header">
                        <span className="eyebrow">Why this frame</span>
                        <h2 className="h1">Why choose<br />{product.name}.</h2>
                    </div>
                    <ul className="pd__highlight-list">
                        {product.highlights.map((h, i) => (
                            <motion.li
                                key={i}
                                className="pd__highlight"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <span className="pd__highlight-num">0{i + 1}</span>
                                <span className="pd__highlight-icon">
                                    <Check size={16} strokeWidth={2.5} />
                                </span>
                                <span className="pd__highlight-text">{h}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            <Testimonials />

            <section className="pd__cta">
                <div className="container pd__cta-inner">
                    <h2 className="display pd__cta-title">
                        Elevate<br />your game.
                    </h2>
                    <div className="pd__cta-right">
                        <p className="lead" style={{ color: 'rgba(255,255,255,0.75)' }}>
                            Order the {product.name} today. Talk directly with our team — they'll guide you to the right grip and tension.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            Order on WhatsApp
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
