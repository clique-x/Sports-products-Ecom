import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        title: 'Professional player · Hyderabad',
        avatar: 'RK',
        text: 'The Ardilla flagship racket transformed my game. Smash power and aerodynamic frame are unmatched on the Indian circuit. Two state tournaments won since switching.',
    },
    {
        id: 2,
        name: 'Ananya Sharma',
        title: 'Uttarakhand State Champion',
        avatar: 'AS',
        text: 'Dozens of rackets over 12 years. The Playful 666 Jointless is simply the best for control. The precision gives me confidence in long rallies.',
    },
    {
        id: 3,
        name: 'Vikram Singh',
        title: 'Senior academy coach',
        avatar: 'VS',
        text: 'Lightweight design means students train longer without wrist fatigue. Hi-modulus graphite frame is exceptionally durable for intensive academy use.',
    },
    {
        id: 4,
        name: 'Priya Patel',
        title: 'National level player',
        avatar: 'PP',
        text: 'Jointless technology is a game-changer for energy transfer on smashes, and the balance helps me on quick defensive returns.',
    },
]

const trustStats = [
    { v: '50,000+', l: 'Players' },
    { v: '4.9★', l: 'Average rating' },
    { v: '100+', l: 'Pro endorsements' },
    { v: '25', l: 'Countries' },
]

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="testimonials__header">
                    <span className="eyebrow">Court reviews</span>
                    <h2 className="h1 testimonials__title">Loved by players<br />across India.</h2>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={t.id}
                            className="quote"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                        >
                            <div className="quote__mark" aria-hidden="true">&ldquo;</div>
                            <div className="quote__stars">
                                {[...Array(5)].map((_, si) => (
                                    <Star key={si} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <blockquote className="quote__text">{t.text}</blockquote>
                            <figcaption className="quote__author">
                                <span className="quote__avatar">{t.avatar}</span>
                                <span className="quote__meta">
                                    <strong>{t.name}</strong>
                                    <span>{t.title}</span>
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>

                <div className="testimonials__trust">
                    {trustStats.map((s, i) => (
                        <div key={i} className="testimonials__trust-item">
                            <span className="testimonials__trust-value">{s.v}</span>
                            <span className="micro">{s.l}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
