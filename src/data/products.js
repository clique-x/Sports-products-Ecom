// Centralized product data
export const products = [
    {
        id: 1,
        slug: 'ardilla',
        name: 'Ardilla',
        model: 'Ardilla',
        category: 'Metallica Series',
        price: 299,
        pairPrice: 599,
        rating: 4.9,
        reviews: 128,
        features: ['Premium Build', 'Professional Grade', 'High Performance'],
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
        badge: 'Best Seller',
        image: '/images/products/ardilla/20260416_151349.jpg',
        heroImage: {
            landscape: '/images/products/ardilla/hero-landscape.jpg',
            portrait: '/images/products/ardilla/20260416_151349.jpg',
        },
        images: [
            '/images/products/ardilla/20260416_151349.jpg',
            '/images/products/ardilla/20260416_151419.jpg',
            '/images/products/ardilla/20260416_151524.jpg',
            '/images/products/ardilla/20260416_151536.jpg',
            '/images/products/ardilla/20260416_151626.jpg',
            '/images/products/ardilla/20260416_151636.jpg'
        ],
        colors: [
            { name: 'Velocity Blue', swatch: '#2e86de', image: '/images/products/ardilla/colors/velocity-blue.png' },
            { name: 'Zenith Rose', swatch: '#e91e63', image: '/images/products/ardilla/colors/zenith-rose.png' },
            { name: 'Raptor Gold', swatch: '#f5c518', image: '/images/products/ardilla/colors/raptor-gold.png' }
        ],
        description: 'Designed specifically for those who are starting their journey. Picking up the racket for the first time, you need gear that grows with you. Our beginner series is built for durability. The integrated joint technology provides a stable feel and durability for protection from clashes.',
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
        price: 399,
        pairPrice: 749,
        rating: 4.9,
        reviews: 96,
        features: ['Jointless Design', 'Enhanced Durability', 'Superior Control'],
        gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        badge: 'Premium',
        image: '/images/Ardilla playful 666 jointless.png',
        heroImage: {
            landscape: '/images/products/ardilla-jointless/20260417_191200.jpg',
            portrait: '/images/products/ardilla-jointless/20260417_191200.jpg',
        },
        images: [
            '/images/products/ardilla-jointless/20260417_191200.jpg',
            '/images/products/ardilla-jointless/20260417_191231.jpg',
            '/images/products/ardilla-jointless/20260417_191249.jpg',
            '/images/products/ardilla-jointless/20260417_191336.jpg'
        ],
        colors: [
            { name: 'Crimson Blaze', swatch: '#e53935', image: '/images/products/ardilla-jointless/colors/crimson-blaze.png' },
            { name: 'Neon Glacier', swatch: '#6ec8e6', image: '/images/products/ardilla-jointless/colors/neon-glacier.png' },
            { name: 'Rose Gold Glide', swatch: '#d4a78a', image: '/images/products/ardilla-jointless/colors/rose-gold-glide.png' },
            { name: 'Purple Fury', swatch: '#5a2ea6', image: '/images/products/ardilla-jointless/colors/purple-fury.png' }
        ],
        description: 'Stop settling for the vibration and "give" of a traditional two-piece racket. Our jointless alloy construction eliminates the external T-joint, creating a sleek, unified frame that feels solid in your hand. By integrating the head and shaft into a single piece, we’ve significantly reduced torsion (twisting) during high-impact smashes, giving you the stability needed to direct the shuttle exactly where you want it. Built to endure the rigors of the learning process, this high-grade alloy frame is resilient enough to handle accidental floor scrapes and clashes without losing its shape. Combined with an Isometric head geometry, we’ve expanded the sweet spot to ensure that even off-center hits carry the power and depth you need to stay in the rally.',
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
