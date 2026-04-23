import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

const linkGroups = {
    Rackets: [
        { name: 'Ardilla', href: '/product/ardilla' },
        { name: 'Playful 666 Jointless', href: '/product/ardilla-playful-666-jointless' },
        { name: 'All Rackets', href: '/#products' },
    ],
    Company: [
        { name: 'About', href: '#' },
        { name: 'Heritage', href: '/#history' },
        { name: 'Partners', href: '#' },
        { name: 'Careers', href: '#' },
    ],
    Support: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
    ],
}

const social = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
]

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer" id="about">
            <div className="container footer__inner">
                <div className="footer__top">
                    <div className="footer__brand">
                        <a href="/" className="footer__brand-lock">
                            <img src="/images/logo/logo.png" alt="Ardilla Sports" className="footer__logo" />
                            <img
                                src="/images/logo/ardilla-wordmark.png"
                                alt="Ardilla"
                                className="footer__wordmark"
                            />
                        </a>
                        <p className="footer__tagline">
                            Tournament-grade badminton rackets engineered in Uttarakhand, India.
                            Crafting world-class equipment since 2015.
                        </p>
                        <div className="footer__social">
                            {social.map((s, i) => (
                                <a key={i} href={s.href} aria-label={s.label} className="footer__social-link">
                                    <s.icon size={16} strokeWidth={2} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__cols">
                        {Object.entries(linkGroups).map(([title, items]) => (
                            <div key={title} className="footer__col">
                                <h4 className="footer__col-title">{title}</h4>
                                <ul>
                                    {items.map(item => (
                                        <li key={item.name}>
                                            <a href={item.href}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="footer__col">
                            <h4 className="footer__col-title">Contact</h4>
                            <ul className="footer__contact">
                                <li>
                                    <Mail size={14} strokeWidth={2} />
                                    <a href="mailto:ardillasportz@gmail.com">ardillasportz@gmail.com</a>
                                </li>
                                <li>
                                    <Phone size={14} strokeWidth={2} />
                                    <a href="tel:+916399561515">+91 6399 561 515</a>
                                </li>
                                <li className="footer__contact-address">
                                    <MapPin size={14} strokeWidth={2} />
                                    <span>
                                        C-38, Sector-1 IIDC SIIDCUL,
                                        Siggadi Growth Centre,
                                        Kotdwar, Uttarakhand 246149
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__display" aria-hidden="true">ARDILLA</div>

                <div className="footer__bottom">
                    <p>© {year} Ardilla Sports. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
