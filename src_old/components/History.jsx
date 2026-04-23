import { motion } from 'framer-motion'
import { Clock, MapPin, Trophy, Globe, Medal } from 'lucide-react'
import './History.css'

const History = () => {
    const timelineEvents = [
        {
            era: 'Ancient Roots',
            year: 'Centuries Ago',
            title: 'The Beginning',
            description: 'Games like "battledore and shuttlecock" existed for centuries, involving hitting a shuttlecock with a paddle.',
            icon: Clock,
            color: '#8B5CF6'
        },
        {
            era: 'Indian Development',
            year: '1860s-1870s',
            title: 'Birth of Poona',
            description: 'British officers in Poona (Pune), India, played a version with a net, calling it "Poona".',
            icon: MapPin,
            color: '#06B6D4'
        },
        {
            era: 'Introduction to England',
            year: '1870s',
            title: 'Badminton House',
            description: 'Officers brought the game home, where it was played at the Duke of Beaufort\'s estate, naming it "Badminton".',
            icon: Trophy,
            color: '#EC4899'
        },
        {
            era: 'Standardization',
            year: '1890s',
            title: 'Official Rules',
            description: 'The Badminton Association of England (BAE) formed in 1893, codifying rules and holding the first All England Open Championships in 1899.',
            icon: Globe,
            color: '#F97316'
        },
        {
            era: 'Global Governance',
            year: '1934',
            title: 'BWF Established',
            description: 'The International Badminton Federation (now BWF) was established to govern the sport worldwide.',
            icon: Globe,
            color: '#14B8A6'
        },
        {
            era: 'Olympic Inclusion',
            year: '1992',
            title: 'Olympic Sport',
            description: 'Badminton became a full medal sport at the Barcelona Summer Olympics.',
            icon: Medal,
            color: '#FBBF24'
        }
    ]

    return (
        <section className="history section" id="history">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="history__label gradient-text">Heritage</span>
                    <h2 className="section-title">The Story of <span className="gradient-text">Badminton</span></h2>
                    <p className="section-subtitle">
                        From ancient origins to Olympic glory, discover the rich history of the world's fastest racket sport.
                    </p>
                </motion.div>

                <div className="history__timeline">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className="history__item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="history__item-content glass-card">
                                <div className="history__item-icon" style={{ background: `linear-gradient(135deg, ${event.color} 0%, ${event.color}99 100%)` }}>
                                    <event.icon size={24} />
                                </div>
                                <div className="history__item-header">
                                    <span className="history__item-era">{event.era}</span>
                                    <span className="history__item-year">{event.year}</span>
                                </div>
                                <h3 className="history__item-title">{event.title}</h3>
                                <p className="history__item-description">{event.description}</p>
                            </div>
                            <div className="history__item-dot" style={{ background: event.color }}>
                                <div className="history__item-dot-inner"></div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="history__timeline-line"></div>
                </div>
            </div>
        </section>
    )
}

export default History
