import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useCursorTilt } from '../hooks/useCursorTilt'
import './CampaignBanners.css'

const EASE = [0.16, 1, 0.3, 1]

const banners = [
    {
        id: 'metallica',
        theme: 'fire',
        eyebrow: 'Chapter 01 — Signature Series',
        line1: 'Unleash',
        line2: 'Raw Power',
        productName: 'ARDILLA METALLICA',
        tagline: 'Explosive power. Pinpoint control. Built for dominance.',
        image: '/images/banners/campaign_metallica.jpg',
        href: '/product/ardilla',
        cta: 'Discover Metallica',
    },
    {
        id: 'playful666',
        theme: 'neon',
        eyebrow: 'Chapter 02 — Jointless Series',
        line1: 'One Piece.',
        line2: 'Limitless Play.',
        productName: 'ARDILLA PLAYFUL 666',
        tagline: 'Jointless technology built for the future.',
        image: '/images/banners/campaign_playful666.jpg',
        href: '/product/ardilla-playful-666-jointless',
        cta: 'Explore 666',
    },
]

const BannerCard = ({ item, index }) => {
    const sectionRef = useRef(null)
    const { ref: tiltRef, handlers, tilt, spotlight } = useCursorTilt({
        maxTilt: 2.5,
        maxParallax: 10,
    })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const imgY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.55, 0.15, 0.15, 0.55])

    const setRefs = (el) => {
        sectionRef.current = el
        tiltRef.current = el
    }

    return (
        <motion.article
            ref={setRefs}
            className={`campaign-card campaign-card--${item.theme}`}
            initial={{ opacity: 0, y: 60, clipPath: 'inset(0 8% 0 8%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0%)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, ease: EASE }}
            onMouseMove={handlers.onMouseMove}
            onMouseEnter={handlers.onMouseEnter}
            onMouseLeave={handlers.onMouseLeave}
            style={{
                '--spot-x': spotlight.x,
                '--spot-y': spotlight.y,
            }}
        >
            <motion.div
                className="campaign-card__stage"
                style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
            >
                <motion.div
                    className="campaign-card__media"
                    style={{ y: imgY }}
                >
                    <img
                        src={item.image}
                        alt={`${item.productName} campaign banner`}
                        draggable="false"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>

                {/* Scroll-linked dim for text overlay legibility */}
                <motion.div
                    className="campaign-card__dim"
                    style={{ opacity: overlayOpacity }}
                    aria-hidden="true"
                />

                {/* Holographic diagonal sheen — sweeps on hover */}
                <span className="campaign-card__sheen" aria-hidden="true" />

                {/* Cursor-follow spotlight */}
                <span className="campaign-card__spot" aria-hidden="true" />

                {/* Grain / noise layer for depth */}
                <span className="campaign-card__grain" aria-hidden="true" />

                {/* Ambient colored glow (drops shadow in theme color) */}
                <span className="campaign-card__glow" aria-hidden="true" />

                {/* Floating CTA — desktop/tablet only */}
                <Link to={item.href} className="campaign-card__cta">
                    <span className="campaign-card__cta-label">
                        <span className="campaign-card__cta-top">{item.cta}</span>
                        <span className="campaign-card__cta-bottom">{item.cta}</span>
                    </span>
                    <span className="campaign-card__cta-arrow">
                        <ArrowUpRight size={20} strokeWidth={2.3} />
                    </span>
                </Link>
            </motion.div>

            {/* Content block — mobile only (shown below banner) */}
            <div className={`campaign-card__footer campaign-card__footer--${item.theme}`}>
                <div className="campaign-card__footer-chapter">
                    <span>0{index + 1}</span>
                    <span className="campaign-card__footer-line" />
                    <span>{item.eyebrow}</span>
                </div>
                <h3 className="campaign-card__footer-name">{item.productName}</h3>
                <p className="campaign-card__footer-tagline">{item.tagline}</p>
                <Link to={item.href} className="campaign-card__footer-cta">
                    <span>{item.cta}</span>
                    <ArrowUpRight size={18} strokeWidth={2.3} />
                </Link>
            </div>
        </motion.article>
    )
}

const CampaignBanners = () => {
    return (
        <section className="campaign-banners" id="campaign">
            <div className="campaign-banners__intro container">
                <span className="eyebrow">The Campaigns</span>
                <h2 className="h1 campaign-banners__title">
                    Two rackets.<br />
                    <em>Two philosophies.</em>
                </h2>
            </div>

            <div className="campaign-banners__stack">
                {banners.map((b, i) => (
                    <BannerCard key={b.id} item={b} index={i} />
                ))}
            </div>
        </section>
    )
}

export default CampaignBanners
