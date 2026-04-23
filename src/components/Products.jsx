import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import './Products.css'

const Products = () => {
    return (
        <section className="products" id="products">
            <div className="container">
                <div className="products__header">
                    <motion.div
                        className="products__header-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="eyebrow">The Lineup</span>
                        <h2 className="h1 products__title">
                            Two frames.<br />
                            <span className="products__title-accent">One ambition.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        className="lead products__intro"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Tournament-grade carbon frames, jointless builds, championship pedigree.
                    </motion.p>
                </div>

                <div className="products__rows">
                    {products.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={i}
                            reverse={i % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
