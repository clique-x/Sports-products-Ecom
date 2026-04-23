import { motion } from 'framer-motion'
import { Zap, Shield, Target, Feather, Award, RefreshCcw } from 'lucide-react'
import './Features.css'

const Features = () => {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Speed',
            description: 'Aerodynamic design for faster swings and quicker reactions on the court.',
            gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)'
        },
        {
            icon: Shield,
            title: 'Unmatched Durability',
            description: 'Premium carbon fiber construction built to withstand intense gameplay.',
            gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)'
        },
        {
            icon: Target,
            title: 'Precision Control',
            description: 'Perfect balance point for accurate shots and consistent placement.',
            gradient: 'linear-gradient(135deg, #EC4899, #F472B6)'
        },
        {
            icon: Feather,
            title: 'Ultra Lightweight',
            description: 'Featherlight frames that reduce fatigue during extended matches.',
            gradient: 'linear-gradient(135deg, #10B981, #34D399)'
        },
        {
            icon: Award,
            title: 'Pro Certified',
            description: 'Used and endorsed by professional players worldwide.',
            gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)'
        },
        {
            icon: RefreshCcw,
            title: 'Adaptive Technology',
            description: 'Responsive shaft technology that adapts to your playing style.',
            gradient: 'linear-gradient(135deg, #6366F1, #818CF8)'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section className="features section" id="features">
            {/* Background Elements */}
            <div className="features__bg-orb features__bg-orb--1"></div>
            <div className="features__bg-orb features__bg-orb--2"></div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="features__label gradient-text">Why Ardilla</span>
                    <h2 className="section-title">Technology That <span className="gradient-text">Wins</span></h2>
                    <p className="section-subtitle">
                        Every racket is engineered with cutting-edge innovations to give you the competitive edge you deserve.
                    </p>
                </motion.div>

                <motion.div
                    className="features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card glass-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="feature-card__icon" style={{ background: feature.gradient }}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                            <div className="feature-card__glow" style={{ background: feature.gradient }}></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Specs Banner */}
                <motion.div
                    className="features__banner glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="features__banner-content">
                        <h3>Advanced Carbon Nano-Tube Technology</h3>
                        <p>35% stronger than standard carbon fiber while being 20% lighter. Experience the future of badminton.</p>
                    </div>
                    <motion.a
                        href="https://wa.me/916399561515?text=I%20want%20to%20know%20more%20about%20Ardilla%20technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Features
