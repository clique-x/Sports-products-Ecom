import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import './Hero.css'

const EASE = [0.16, 1, 0.3, 1]
const SLIDE_MS = 6500

const slides = [
    {
        id: 1,
        chapter: 'Signature Series',
        number: '01',
        italic: '— The Flagship',
        headline: [
            { text: 'Engineered' },
            { text: 'for', italic: true, accent: true },
            { text: 'Champions' },
        ],
        productName: 'Ardilla Pro',
        subtitle: 'Carbon Frame · 85g · Head Heavy',
        image: '/images/banners/triptych_1.jpg',
        mobileImage: '/images/studio-dark/portrait/20260416_151349.jpg',
        ctaLabel: 'Explore Ardilla',
        ctaHref: '/product/ardilla',
    },
    {
        id: 2,
        chapter: 'Jointless Series',
        number: '02',
        italic: '— The Game Changer',
        headline: [
            { text: 'Seamless' },
            { text: 'One-Piece', italic: true, accent: true },
            { text: 'Power' },
        ],
        productName: 'Ardilla Playful 666',
        subtitle: 'Jointless Carbon · 82g · Even Balance',
        image: '/images/banners/triptych_2.jpg',
        mobileImage: '/images/studio-dark/portrait/20260417_191200.jpg',
        ctaLabel: 'Explore 666',
        ctaHref: '/product/ardilla-playful-666-jointless',
    },
    {
        id: 3,
        chapter: 'The Craft',
        number: '03',
        italic: '— Built to Win',
        headline: [
            { text: 'Precision' },
            { text: 'Meets', italic: true, accent: true },
            { text: 'Craft' },
        ],
        productName: 'Tournament Grade',
        subtitle: 'Championship Pedigree · Jointless Construction',
        image: '/images/banners/triptych_3.jpg',
        mobileImage: '/images/studio-dark/portrait/20260416_151524.jpg',
        ctaLabel: 'Shop Collection',
        ctaHref: '#products',
    },
]

const CtaLink = ({ href, className, children }) =>
    href.startsWith('/') && !href.startsWith('/#') ? (
        <Link to={href} className={className}>
            {children}
        </Link>
    ) : (
        <a href={href} className={className}>
            {children}
        </a>
    )

const Hero = () => {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)
    const heroRef = useRef(null)
    const total = slides.length
    const slide = slides[current]

    useEffect(() => {
        if (paused) return
        const id = setTimeout(() => {
            setCurrent((c) => (c + 1) % total)
        }, SLIDE_MS)
        return () => clearTimeout(id)
    }, [current, paused, total])

    const next = () => setCurrent((c) => (c + 1) % total)
    const prev = () => setCurrent((c) => (c - 1 + total) % total)

    return (
        <section
            className="hero"
            id="hero"
            ref={heroRef}
            aria-roledescription="carousel"
            aria-label="Featured rackets"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="hero__bg">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={slide.id}
                        className="hero__bg-slide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: EASE }}
                    >
                        <picture>
                            <source
                                media="(max-width: 767px)"
                                srcSet={slide.mobileImage}
                            />
                            <motion.img
                                src={slide.image}
                                alt=""
                                className="hero__bg-img"
                                initial={{ scale: 1.18 }}
                                animate={{ scale: 1.0 }}
                                transition={{ duration: (SLIDE_MS + 1500) / 1000, ease: 'linear' }}
                                draggable="false"
                            />
                        </picture>
                    </motion.div>
                </AnimatePresence>
                <div className="hero__bg-overlay" aria-hidden="true" />
                <div className="hero__bg-vignette" aria-hidden="true" />
                <div className="hero__bg-noise" aria-hidden="true" />
            </div>

            <div className="hero__shell">
                <div className="hero__top">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`eye-${slide.id}`}
                            className="hero__eyebrow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                        >
                            <span className="hero__eyebrow-line" />
                            <span>
                                {slide.chapter} {slide.number}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    <div className="hero__chapter">
                        <span className="hero__chapter-label">Chapter</span>{' '}
                        <span className="hero__chapter-num">{slide.number}</span>
                        <span className="hero__chapter-total">
                            {' '}/ 0{total}
                        </span>
                    </div>
                </div>

                <div className="hero__center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`italic-${slide.id}`}
                            className="hero__italic"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                        >
                            {slide.italic}
                        </motion.p>
                    </AnimatePresence>

                    <h1 className="hero__headline" key={`h-${slide.id}`}>
                        {slide.headline.map((line, i) => (
                            <div key={`${slide.id}-${i}`} className="hero__line-mask">
                                <motion.span
                                    className={`hero__line ${line.italic ? 'hero__line--italic' : ''} ${line.accent ? 'hero__line--accent' : ''}`}
                                    initial={{ y: '115%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.0,
                                        ease: EASE,
                                        delay: 0.4 + i * 0.14,
                                    }}
                                >
                                    {line.text}
                                </motion.span>
                            </div>
                        ))}
                    </h1>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`meta-${slide.id}`}
                            className="hero__meta"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
                        >
                            <div className="hero__product-name">{slide.productName}</div>
                            <div className="hero__product-sub">{slide.subtitle}</div>
                            <CtaLink href={slide.ctaHref} className="hero__cta">
                                <span className="hero__cta-label">{slide.ctaLabel}</span>
                                <ArrowRight size={16} strokeWidth={2.4} className="hero__cta-arrow" />
                                <span className="hero__cta-wash" aria-hidden="true" />
                            </CtaLink>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="hero__bottom">
                    <div className="hero__pagination" role="tablist">
                        {slides.map((s, i) => (
                            <button
                                key={s.id}
                                className={`hero__dot ${current === i ? 'is-active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-selected={current === i}
                                type="button"
                            >
                                {current === i && !paused && (
                                    <motion.span
                                        key={`fill-${slide.id}`}
                                        className="hero__dot-fill"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                                    />
                                )}
                                {current === i && paused && (
                                    <span className="hero__dot-fill is-static" />
                                )}
                            </button>
                        ))}
                        <span className="hero__pagination-count">
                            0{current + 1} <span>/ 0{total}</span>
                        </span>
                    </div>

                    <div className="hero__nav">
                        <button
                            className="hero__nav-btn"
                            onClick={prev}
                            aria-label="Previous slide"
                            type="button"
                        >
                            <ChevronLeft size={18} strokeWidth={2.3} />
                        </button>
                        <button
                            className="hero__nav-btn"
                            onClick={next}
                            aria-label="Next slide"
                            type="button"
                        >
                            <ChevronRight size={18} strokeWidth={2.3} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero__vertical" aria-hidden="true">
                <span>ARDILLA</span>
                <span className="hero__vertical-line" />
                <span>Tournament Badminton Rackets</span>
            </div>
        </section>
    )
}

export default Hero
