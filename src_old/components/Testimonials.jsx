import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            title: 'Professional Player (Hyderabad)',
            avatar: 'RK',
            rating: 5,
            text: "The Ardilla flagship racket has completely transformed my game. The smash power and aerodynamic frame are unmatched on the Indian circuit. I've won 2 state tournaments since switching!",
            gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)'
        },
        {
            id: 2,
            name: 'Ananya Sharma',
            title: 'Uttarakhand State Champion',
            avatar: 'AS',
            rating: 5,
            text: "I've tried dozens of rackets over my 12-year career. The Ardilla Playful 666 Jointless is simply the best for control. The precision gives me huge confidence in long rallies.",
            gradient: 'linear-gradient(135deg, #06B6D4, #10B981)'
        },
        {
            id: 3,
            name: 'Vikram Singh',
            title: 'Senior Academy Coach',
            avatar: 'VS',
            rating: 5,
            text: "The lightweight design of Ardilla rackets means my students can train longer without wrist fatigue. The hi-modulus graphite frame is exceptionally durable for intensive academy use.",
            gradient: 'linear-gradient(135deg, #F59E0B, #EC4899)'
        },
        {
            id: 4,
            name: 'Priya Patel',
            title: 'National Level Player',
            avatar: 'PP',
            rating: 5,
            text: "As a competitive player, the jointless technology is a game-changer. The energy transfer in smashes is incredible, and the balance helps in quick defensive returns.",
            gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40, rotateX: -10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="testimonials__label gradient-text">Testimonials</span>
                    <h2 className="section-title">Loved by <span className="gradient-text">Champions</span></h2>
                    <p className="section-subtitle">
                        Hear what professional players and enthusiasts say about their Ardilla experience.
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="testimonial-card__quote">
                                <Quote size={32} />
                            </div>

                            <div className="testimonial-card__rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="testimonial-card__text">"{testimonial.text}"</p>

                            <div className="testimonial-card__author">
                                <div
                                    className="testimonial-card__avatar"
                                    style={{ background: testimonial.gradient }}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.name}</span>
                                    <span className="testimonial-card__title">{testimonial.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    className="testimonials__trust"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-value">50,000+</span>
                        <span className="testimonials__trust-label">Happy Customers</span>
                    </div>
                    <div className="testimonials__trust-divider"></div>
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-value">4.9/5</span>
                        <span className="testimonials__trust-label">Average Rating</span>
                    </div>
                    <div className="testimonials__trust-divider"></div>
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-value">100+</span>
                        <span className="testimonials__trust-label">Pro Endorsements</span>
                    </div>
                    <div className="testimonials__trust-divider"></div>
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-value">25</span>
                        <span className="testimonials__trust-label">Countries</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
