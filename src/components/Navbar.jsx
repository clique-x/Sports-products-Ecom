import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ShieldCheck } from 'lucide-react'
import './Navbar.css'

const links = [
    { name: 'Rackets', href: '/#products' },
    { name: 'Technology', href: '/#features' },
    { name: 'Heritage', href: '/#history' },
    { name: 'Reviews', href: '/#testimonials' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    return (
        <>
            <div className="nav-announce" role="complementary">
                <div className="container nav-announce__inner">
                    <span className="nav-announce__item">
                        <ShieldCheck size={13} strokeWidth={2.2} />
                        <span>2-year warranty on every frame</span>
                    </span>
                </div>
            </div>

            <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
                <div className="nav__bar container">
                    <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
                        <img src="/images/logo/logo.png" alt="Ardilla Sports" className="nav__logo" />
                        <img
                            src="/images/logo/ardilla-wordmark.png"
                            alt="Ardilla"
                            className="nav__wordmark"
                        />
                    </Link>

                    <nav className="nav__links">
                        {links.map(l => (
                            <a key={l.name} href={l.href} className="nav__link">{l.name}</a>
                        ))}
                    </nav>

                    <div className="nav__actions">
                        <a href="tel:+916399561515" className="nav__phone" aria-label="Call Ardilla">
                            <Phone size={14} strokeWidth={2.2} />
                            <span>+91 6399 561 515</span>
                        </a>
                        <a
                            href="tel:+916399561515"
                            className="nav__icon-btn nav__phone-icon"
                            aria-label="Call Ardilla"
                        >
                            <Phone size={18} strokeWidth={2.2} />
                        </a>
                        <button
                            className="nav__icon-btn nav__toggle"
                            onClick={() => setOpen(o => !o)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

            </header>

            <div className={`nav__drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
                <button
                    className="nav__drawer-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    type="button"
                >
                    <X size={22} />
                </button>
                <nav className="nav__drawer-links">
                    {links.map(l => (
                        <a
                            key={l.name}
                            href={l.href}
                            className="nav__drawer-link"
                            onClick={() => setOpen(false)}
                        >
                            {l.name}
                        </a>
                    ))}
                </nav>
                <div className="nav__drawer-contact">
                    <a href="tel:+916399561515" className="nav__drawer-phone">
                        <Phone size={14} strokeWidth={2.2} />
                        <span>+91 6399 561 515</span>
                    </a>
                </div>
                <a
                    href="https://wa.me/916399561515?text=Hi%20Ardilla%2C%20I%27m%20interested%20in%20your%20rackets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg nav__drawer-cta"
                    onClick={() => setOpen(false)}
                >
                    Order on WhatsApp
                </a>
            </div>
        </>
    )
}

export default Navbar
