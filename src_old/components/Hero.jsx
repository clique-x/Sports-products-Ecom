import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Award, Shield } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    const floatingIcons = [
        { Icon: Zap, delay: 0, position: { top: '20%', left: '10%' } },
        { Icon: Award, delay: 1, position: { top: '60%', left: '5%' } },
        { Icon: Shield, delay: 2, position: { top: '30%', right: '8%' } },
    ]

    return (
        <section className="hero" id="hero">
            {/* Animated Background Orbs */}
            <div className="hero__orbs">
                <div className="hero__orb hero__orb--purple"></div>
                <div className="hero__orb hero__orb--cyan"></div>
                <div className="hero__orb hero__orb--pink"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="hero__grid"></div>

            <div className="hero__container">
                <div className="hero__content">
                    {/* Badge */}
                    <motion.div
                        className="hero__badge glass"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="hero__badge-dot"></span>
                        <span>New 2024 Collection Available</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Precision Mastery.
                        <br />
                        Crafted by <span className="gradient-text brand-font">Ardilla Sports</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Professional-grade badminton equipment engineered for champions.
                        Experience the perfect fusion of agility, power, and Ardilla elite precision.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a
                            href="https://wa.me/916399561515?text=Having%20product%20info%20model%20name"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Shop Collection
                            <ArrowRight size={20} />
                        </motion.a>
                        <motion.button
                            className="btn btn-secondary btn-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play size={20} />
                            Watch Video
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero__stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="hero__stat">
                            <span className="hero__stat-value">50K+</span>
                            <span className="hero__stat-label">Happy Players</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">98%</span>
                            <span className="hero__stat-label">Satisfaction</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">#1</span>
                            <span className="hero__stat-label">Rated Brand</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="hero__image-container">
                        <div className="hero__image-glow"></div>
                        <img 
                            src="/images/hero_smash.png" 
                            alt="Ardilla Elite Badminton Player Smash" 
                            className="hero__cinematic-img parallax-float"
                        />
                    </div>

                    {/* Floating Icons */}
                    {floatingIcons.map(({ Icon, delay, position }, index) => (
                        <motion.div
                            key={index}
                            className="hero__floating-icon glass"
                            style={position}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: delay + 1, type: "spring" }}
                        >
                            <Icon size={24} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </motion.div>
        </section>
    )
}

export default Hero
