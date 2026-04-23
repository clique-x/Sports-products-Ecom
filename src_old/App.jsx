import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import History from './components/History'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ProductDetail from './components/ProductDetail'

// Home page component
const HomePage = () => (
    <>
        <Hero />
        <Products />
        <Features />
        <History />
        <Testimonials />
        <CTA />
    </>
)

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:slug" element={<ProductDetail />} />
                </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
