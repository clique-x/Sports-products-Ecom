import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import './CTA.css'

const perks = ['Free India shipping', '30-day money back', '2-year warranty']

const CTA = () => {
    return (
        <section className="cta section">
            <img src="/images/cta_bg.png" alt="" className="cta__bg" aria-hidden="true" />
            <div className="cta__overlay" aria-hidden="true" />

            <div className="container cta__container">
                <motion.div
                    className="cta__inner"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="eyebrow cta__eyebrow">Limited time</span>
                    <h2 className="display cta__title">
                        Ready to<br />
                        <span className="cta__title-accent">dominate</span><br />
                        the court?
                    </h2>
                    <p className="cta__lead">
                        20% off your first order. Talk directly with our experts on WhatsApp —
                        they'll match you to the right frame.
                    </p>

                    <div className="cta__actions">
                        <a
                            href="https://wa.me/916399561515?text=I%27m%20interested%20in%20Ardilla%20Sports%20products"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            Chat on WhatsApp
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </a>
                    </div>

                    <ul className="cta__perks">
                        {perks.map((p) => (
                            <li key={p}>
                                <Check size={16} strokeWidth={2.5} />
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
