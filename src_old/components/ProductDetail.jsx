import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Check, Shield, Truck, RotateCcw } from 'lucide-react'
import { getProductBySlug, products } from '../data/products'
import Testimonials from './Testimonials'
import './ProductDetail.css'

const ProductDetail = () => {
    const { slug } = useParams()
    const product = getProductBySlug(slug)
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    if (!product) {
        return (
            <div className="product-detail-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>Sorry, we couldn't find the product you're looking for.</p>
                    <Link to="/" className="btn btn-primary">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    const whatsappLink = `https://wa.me/916399561515?text=Having%20product%20info%20${encodeURIComponent(product.name)}`

    return (
        <div className="product-detail">
            {/* Back Navigation */}
            <div className="product-detail__nav">
                <div className="container">
                    <Link to="/" className="product-detail__back">
                        <ArrowLeft size={20} />
                        <span>Back to Products</span>
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="product-detail__hero">
                <div className="container">
                    <div className="product-detail__grid">
                        {/* Product Image */}
                        <motion.div
                            className="product-detail__image-wrapper"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="product-detail__image-gallery">
                                <div className="product-detail__image glass-card" style={{ background: product.gradient }}>
                                    {product.badge && (
                                        <span className="product-detail__badge">{product.badge}</span>
                                    )}
                                    <img
                                        src={product.images ? product.images[activeImageIndex] : product.image}
                                        alt={product.name}
                                        className="product-detail__img"
                                    />
                                </div>
                                {product.images && product.images.length > 0 && (
                                    <div className="product-detail__thumbnails">
                                        {product.images.map((imgSrc, index) => (
                                            <div 
                                                key={index} 
                                                className={`product-detail__thumbnail glass-card ${activeImageIndex === index ? 'active' : ''}`}
                                                onClick={() => setActiveImageIndex(index)}
                                                style={{ background: product.gradient }}
                                            >
                                                <img src={imgSrc} alt={`${product.name} view ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            className="product-detail__info"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="product-detail__category">{product.category}</span>
                            <h1 className="product-detail__title">{product.name}</h1>

                            <div className="product-detail__rating">
                                <Star size={20} fill="currentColor" className="product-detail__star" />
                                <span className="product-detail__rating-value">{product.rating}</span>
                                <span className="product-detail__reviews">({product.reviews} reviews)</span>
                            </div>

                            <p className="product-detail__description">{product.description}</p>

                            <div className="product-detail__features">
                                {product.features.map((feature, index) => (
                                    <span key={index} className="product-detail__feature-tag">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="product-detail__price-section">
                                <div className="product-detail__price">
                                    <span className="product-detail__price-current">₹{product.price.toLocaleString('en-IN')}</span>
                                    <span className="product-detail__price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                    <span className="product-detail__discount">
                                        Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </div>

                            <motion.a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg product-detail__buy-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >

                                Buy Now on WhatsApp
                            </motion.a>

                            <div className="product-detail__guarantees">
                                <div className="product-detail__guarantee">
                                    <Shield size={18} />
                                    <span>2 Year Warranty</span>
                                </div>
                                <div className="product-detail__guarantee">
                                    <Truck size={18} />
                                    <span>Free Shipping</span>
                                </div>
                                <div className="product-detail__guarantee">
                                    <RotateCcw size={18} />
                                    <span>30 Day Returns</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="product-detail__specs section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Technical <span className="gradient-text">Specifications</span></h2>
                    </motion.div>

                    <motion.div
                        className="product-detail__specs-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {Object.entries(product.specifications).map(([key, value], index) => (
                            <div key={index} className="product-detail__spec-item glass-card">
                                <span className="product-detail__spec-label">
                                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </span>
                                <span className="product-detail__spec-value">{value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="product-detail__highlights section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Why Choose <span className="gradient-text">{product.name}</span></h2>
                    </motion.div>

                    <motion.div
                        className="product-detail__highlights-list"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {product.highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="product-detail__highlight-item glass-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="product-detail__highlight-icon">
                                    <Check size={20} />
                                </div>
                                <span>{highlight}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Reviews Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="product-detail__cta section">
                <div className="container">
                    <motion.div
                        className="product-detail__cta-content glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Elevate Your Game?</h2>
                        <p>Get the {product.name} today and experience the difference.</p>
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >

                            Order Now on WhatsApp
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
