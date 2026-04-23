import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'
import { products } from '../data/products'
import './Products.css'

const Products = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="products section" id="products">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="products__label gradient-text">Premium Collection</span>
                    <h2 className="section-title">Engineered for <span className="gradient-text">Champions</span></h2>
                    <p className="section-subtitle">
                        Discover our flagship rackets, designed with cutting-edge technology and crafted for peak performance.
                    </p>
                </motion.div>

                <motion.div
                    className="products__grid products__grid--two"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="product-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            {product.badge && (
                                <span className="product-card__badge">{product.badge}</span>
                            )}

                            <Link to={`/product/${product.slug}`} className="product-card__image-link">
                                <div className="product-card__image" style={{ background: product.gradient }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-card__img"
                                    />
                                </div>
                            </Link>

                            <div className="product-card__content">
                                <span className="product-card__category">{product.category}</span>
                                <Link to={`/product/${product.slug}`} className="product-card__name-link">
                                    <h3 className="product-card__name">{product.name}</h3>
                                </Link>

                                <div className="product-card__rating">
                                    <Star size={16} fill="currentColor" className="product-card__star" />
                                    <span>{product.rating}</span>
                                    <span className="product-card__reviews">({product.reviews} reviews)</span>
                                </div>

                                <ul className="product-card__features">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="product-card__footer">
                                    <div className="product-card__price">
                                        <span className="product-card__price-current">₹{product.price.toLocaleString('en-IN')}</span>
                                        <span className="product-card__price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="product-card__actions">
                                        <Link
                                            to={`/product/${product.slug}`}
                                            className="product-card__view"
                                        >
                                            <ArrowRight size={20} />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Products
