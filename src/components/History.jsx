import { motion } from 'framer-motion'
import './History.css'

const timeline = [
    { year: 'Centuries ago', title: 'Battledore & shuttlecock', desc: 'Ancient games involving hitting a shuttlecock with a paddle existed across Asia and Europe.' },
    { year: '1860s', title: 'Poona is born', desc: 'British officers stationed in Poona (Pune), India, played a version with a net, naming it "Poona".' },
    { year: '1870s', title: 'Badminton House', desc: 'The game travelled to England, played at the Duke of Beaufort\'s estate — and inherited its name.' },
    { year: '1893', title: 'The rules', desc: 'The Badminton Association of England codified the rules and ran the first All England Open in 1899.' },
    { year: '1934', title: 'BWF established', desc: 'The International Badminton Federation — now BWF — was established to govern the sport worldwide.' },
    { year: '1992', title: 'Olympic sport', desc: 'Badminton became a full medal sport at the Barcelona Summer Olympics.' },
]

const History = () => {
    return (
        <section className="history section" id="history">
            <div className="container">
                <div className="history__header">
                    <span className="eyebrow">Heritage</span>
                    <h2 className="h1 history__title">A 150-year<br />rally.</h2>
                    <p className="lead">
                        From colonial-era Pune to Olympic podiums — a brief history of the world's
                        fastest racket sport.
                    </p>
                </div>

                <ol className="history__list">
                    {timeline.map((t, i) => (
                        <motion.li
                            key={i}
                            className="history__row"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.04 }}
                        >
                            <span className="history__year">{t.year}</span>
                            <div className="history__body">
                                <h3 className="history__row-title">{t.title}</h3>
                                <p className="history__desc">{t.desc}</p>
                            </div>
                            <span className="history__dot" aria-hidden="true" />
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default History
