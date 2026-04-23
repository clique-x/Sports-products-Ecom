import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Products', href: '/#products' },
        { name: 'Features', href: '/#features' },
        { name: 'Reviews', href: '/#testimonials' },
        { name: 'About', href: '/#about' },
    ]

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="navbar__container">
                <a href="/" className="navbar__logo">
                    <motion.div
                        className="navbar__logo-wrapper"
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.img
                            src="/images/logo/logo.png"
                            alt="Ardilla Logo"
                            className="navbar__logo-img"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div className="navbar__logo-shimmer"></div>
                    </motion.div>
                </a>

                <nav className="navbar__nav">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="navbar__link"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                <div className="navbar__actions">


                    <motion.button
                        className="btn btn-primary navbar__cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Now
                    </motion.button>
                </div>

                <button
                    className="navbar__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`navbar__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                initial={false}
                animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            >
                <nav className="navbar__mobile-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="navbar__mobile-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn btn-primary navbar__mobile-cta">
                        Shop Now
                    </button>
                </nav>
            </motion.div>
        </motion.header>
    )
}

export default Navbar
