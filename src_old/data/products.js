// Centralized product data
export const products = [
    {
        id: 1,
        slug: 'ardilla',
        name: 'Ardilla',
        model: 'Ardilla',
        category: 'Professional',
        price: 24999,
        originalPrice: 29999,
        rating: 4.9,
        reviews: 128,
        features: ['Premium Build', 'Professional Grade', 'High Performance'],
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
        badge: 'Best Seller',
        image: '/images/Ardilla.png',
        images: [
            '/images/products/ardilla/20260416_151349.jpg',
            '/images/products/ardilla/20260416_151419.jpg',
            '/images/products/ardilla/20260416_151524.jpg',
            '/images/products/ardilla/20260416_151536.jpg',
            '/images/products/ardilla/20260416_151626.jpg',
            '/images/products/ardilla/20260416_151636.jpg'
        ],
        description: 'The Ardilla is our flagship professional-grade badminton racket, designed for players who demand the best. With its premium build quality and exceptional performance characteristics, this racket delivers unmatched power and precision on the court.',
        specifications: {
            weight: '85g (4U)',
            length: '675mm',
            balance: 'Head Heavy',
            flexibility: 'Medium',
            frame: 'Hi-Modulus Graphite',
            shaft: 'Carbon Fiber',
            stringTension: '22-28 lbs',
            gripSize: 'G5'
        },
        highlights: [
            'Professional tournament-grade construction',
            'Advanced aerodynamic frame design',
            'Superior power transfer technology',
            'Enhanced sweet spot for consistent shots',
            'Ergonomic grip for extended play comfort'
        ]
    },
    {
        id: 2,
        slug: 'ardilla-playful-666-jointless',
        name: 'Ardilla Playful 666 Jointless',
        model: 'Ardilla playful 666 jointless',
        category: 'Jointless Series',
        price: 29999,
        originalPrice: 34999,
        rating: 4.9,
        reviews: 96,
        features: ['Jointless Design', 'Enhanced Durability', 'Superior Control'],
        gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        badge: 'Premium',
        image: '/images/Ardilla playful 666 jointless.png',
        images: [
            '/images/products/ardilla-jointless/20260417_191200.jpg',
            '/images/products/ardilla-jointless/20260417_191231.jpg',
            '/images/products/ardilla-jointless/20260417_191249.jpg',
            '/images/products/ardilla-jointless/20260417_191336.jpg',
            '/images/products/ardilla-jointless/20260417_191541.jpg',
            '/images/products/ardilla-jointless/20260417_191543.jpg'
        ],
        description: 'The Ardilla Playful 666 Jointless represents the pinnacle of racket engineering. Its revolutionary jointless construction provides unparalleled durability and energy transfer, making it the ultimate choice for serious competitive players.',
        specifications: {
            weight: '82g (5U)',
            length: '675mm',
            balance: 'Even Balance',
            flexibility: 'Stiff',
            frame: 'One-Piece Jointless Carbon',
            shaft: 'Ultra-High Modulus Graphite',
            stringTension: '24-30 lbs',
            gripSize: 'G5'
        },
        highlights: [
            'Revolutionary jointless one-piece construction',
            'Maximum energy transfer for powerful smashes',
            'Enhanced durability with no weak points',
            'Precision control for advanced techniques',
            'Tournament-proven performance'
        ]
    }
]

export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug)
}

export const getProductById = (id) => {
    return products.find(product => product.id === id)
}
