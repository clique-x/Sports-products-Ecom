import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import './CTA.css'

const CTA = () => {
    return (
        <section className="cta section">
            {/* Background Elements */}
            <div className="cta__bg">
                <img src="/images/cta_bg.png" alt="Badminton cinematic background" className="cta__bg-image" />
                <div className="cta__dark-overlay"></div>
                <div className="cta__bg-gradient"></div>
                <div className="cta__bg-orb cta__bg-orb--1"></div>
                <div className="cta__bg-orb cta__bg-orb--2"></div>
            </div>

            <div className="container">
                <motion.div
                    className="cta__content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="cta__badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Sparkles size={16} />
                        <span>Limited Time Offer</span>
                    </motion.div>

                    <h2 className="cta__title">
                        Ready to <span className="gradient-text">Dominate</span> the Court?
                    </h2>

                    <p className="cta__subtitle">
                        Get 20% off your first order and join 50,000+ players who've elevated their game with Ardilla.
                    </p>

                    <motion.div
                        className="cta__actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.a
                            href="https://wa.me/916399561515?text=I%27m%20interested%20in%20Ardilla%20Sports%20products"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg cta__whatsapp-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Chat with us on WhatsApp
                            <ArrowRight size={20} />
                        </motion.a>
                        <p className="cta__disclaimer">
                            Get personalized recommendations from our badminton experts.
                        </p>
                    </motion.div>

                    <motion.div
                        className="cta__features"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="cta__feature">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                            <span>Free Worldwide Shipping</span>
                        </div>
                        <div className="cta__feature">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                            <span>30-Day Money Back</span>
                        </div>
                        <div className="cta__feature">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                            <span>2-Year Warranty</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
