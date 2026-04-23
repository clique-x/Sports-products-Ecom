import { motion } from 'framer-motion'
import { Zap, Shield, Target, Feather, Award, RefreshCcw, ArrowUpRight } from 'lucide-react'
import './Features.css'

const features = [
    { icon: Zap, title: 'Lightning speed', desc: 'Aerodynamic frame profile cuts through the air for faster swings and sharper reactions.' },
    { icon: Shield, title: 'Durable by design', desc: 'Premium carbon fiber lay-up, tested to withstand thousands of tournament-level smashes.' },
    { icon: Target, title: 'Precision control', desc: 'Balanced sweet spot and tuned flex for accurate placement on every shot.' },
    { icon: Feather, title: 'Ultra lightweight', desc: 'Featherlight frames minimize fatigue over extended matches and academy sessions.' },
    { icon: Award, title: 'Pro-certified', desc: 'Used and endorsed by state and national players across the Indian circuit.' },
    { icon: RefreshCcw, title: 'Adaptive flex', desc: 'Responsive shaft technology that adapts to power, defensive, and all-rounder playstyles.' },
]

const Features = () => {
    return (
        <section className="features section" id="features">
            <div className="container">
                <div className="features__header">
                    <span className="eyebrow">Why Ardilla</span>
                    <h2 className="h1 features__title">Technology<br />that wins.</h2>
                    <p className="lead features__lead">
                        Every racket is engineered with a single obsession: giving the player holding it
                        a measurable, repeatable edge.
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="feature"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                        >
                            <div className="feature__num">0{i + 1}</div>
                            <div className="feature__icon">
                                <f.icon size={22} strokeWidth={2} />
                            </div>
                            <h3 className="feature__title">{f.title}</h3>
                            <p className="feature__desc">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="features__banner"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="features__banner-copy">
                        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>Material science</span>
                        <h3 className="h2 features__banner-title">
                            Carbon nano-tube construction —<br />35% stronger, 20% lighter.
                        </h3>
                    </div>
                    <a
                        href="https://wa.me/916399561515?text=I%20want%20to%20know%20more%20about%20Ardilla%20technology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary features__banner-cta"
                    >
                        Talk to an expert
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Features
