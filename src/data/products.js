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
            { name: 'Velocity Blue', swatch: '#2e86de', image: '/images/products/ardilla/20260416_151349.jpg' },
            { name: 'Zenith Rose', swatch: '#e91e63', image: '/images/products/ardilla/20260416_151524.jpg' },
            { name: 'Raptor Gold', swatch: '#f5c518', image: '/images/products/ardilla/20260416_151626.jpg' },
            { name: 'Neon Glacier', swatch: '#6ec8e6', image: '/images/products/ardilla/neon-glacier.jpg' },
            { name: 'Rose Gold Glide', swatch: '#d4a78a', image: '/images/products/ardilla/rose-gold-glide.jpg' },
            { name: 'Purple Fury', swatch: '#5a2ea6', image: '/images/products/ardilla/purple-fury.jpg' }
        ],
        description: 'Designed specifically for those who are starting their journey. Picking up the racket for the first time, you need gear that grows with you. Our beginner series is built for durability. The integrated joint technology provides a stable feel and durability for protection from clashes.',
        specifications: {
            weight: '85g (4U)',
            length: '675mm',
            balance: 'Head Heavy',
            flexibility: 'Medium',
            frame: 'Alloy',
            shaft: 'Alloy',
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
            landscape: '/images/products/ardilla-jointless/hero-spotlight.jpg',
            portrait: '/images/products/ardilla-jointless/hero-spotlight.jpg',
        },
        images: [
            '/images/products/ardilla-jointless/gallery-02.jpg',
            '/images/products/ardilla-jointless/gallery-03.jpg',
            '/images/products/ardilla-jointless/gallery-04.jpg',
            '/images/products/ardilla-jointless/gallery-07.jpg',
            '/images/products/ardilla-jointless/gallery-08.jpg'
        ],
        colors: [
            { name: 'White', swatch: '#FFFFFF', image: '/images/products/ardilla-jointless/gallery-03.jpg' },
            { name: 'Neon Green', swatch: '#39FF14', image: '/images/products/ardilla-jointless/gallery-04.jpg' },
            { name: 'Red', swatch: '#E53935', image: '/images/products/ardilla-jointless/gallery-08.jpg' },
            { name: 'Orange', swatch: '#FF7A00', image: '/images/products/ardilla-jointless/gallery-02.jpg' }
        ],
        description: 'Stop settling for the vibration and "give" of a traditional two-piece racket. Our jointless alloy construction eliminates the external T-joint, creating a sleek, unified frame that feels solid in your hand. By integrating the head and shaft into a single piece, we’ve significantly reduced torsion (twisting) during high-impact smashes, giving you the stability needed to direct the shuttle exactly where you want it. Built to endure the rigors of the learning process, this high-grade alloy frame is resilient enough to handle accidental floor scrapes and clashes without losing its shape. Combined with an Isometric head geometry, we’ve expanded the sweet spot to ensure that even off-center hits carry the power and depth you need to stay in the rally.',
        specifications: {
            weight: '82g (5U)',
            length: '675mm',
            balance: 'Even Balance',
            flexibility: 'Stiff',
            frame: 'One-Piece Jointless Alloy',
            shaft: 'Alloy',
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
