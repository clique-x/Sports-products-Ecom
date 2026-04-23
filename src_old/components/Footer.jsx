import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        products: [
            { name: 'Rackets', href: '#' },
            { name: 'Shuttlecocks', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Apparel', href: '#' },
            { name: 'Accessories', href: '#' },
        ],
        support: [
            { name: 'Contact Us', href: '#' },
            { name: 'FAQs', href: '#' },
            { name: 'Shipping', href: '#' },
            { name: 'Returns', href: '#' },
            { name: 'Warranty', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Partners', href: '#' },
            { name: 'Sustainability', href: '#' },
        ],
    }

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'YouTube' },
        { icon: Facebook, href: '#', label: 'Facebook' },
    ]

    return (
        <footer className="footer" id="about">
            <div className="footer__top-glow"></div>

            <div className="container">
                <div className="footer__grid">
                    {/* Brand Section */}
                    <motion.div
                        className="footer__brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <a href="/" className="footer__logo">
                            <motion.div
                                className="footer__logo-wrapper"
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.img
                                    src="/images/logo/logo.png"
                                    alt="Ardilla Logo"
                                    className="footer__logo-img"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </motion.div>
                        </a>
                        <p className="footer__tagline">
                            Elevating badminton excellence since 2015. Crafting world-class equipment for champions worldwide.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="footer__social-link glass"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Products Links */}
                    <motion.div
                        className="footer__links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="footer__links-title">Products</h4>
                        <ul>
                            {footerLinks.products.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div
                        className="footer__links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="footer__links-title">Support</h4>
                        <ul>
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        className="footer__links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="footer__links-title">Company</h4>
                        <ul>
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        className="footer__contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="footer__links-title">Contact</h4>
                        <div className="footer__contact-items">
                            <div className="footer__contact-item">
                                <Mail size={16} />
                                <span>ardillasportz@gmail.com</span>
                            </div>
                            <div className="footer__contact-item">
                                <Phone size={16} />
                                <span>+91 6399561515</span>
                            </div>
                            <div className="footer__contact-item">
                                <MapPin size={16} />
                                <span>India, Uttarakhand</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="footer__bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="footer__copyright">
                        © {currentYear} Ardilla Sports. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
