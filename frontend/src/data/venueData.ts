import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import cocktail1 from '@/assets/cocktail-1.jpg';
import cocktail2 from '@/assets/cocktail-2.jpg';
import lounge2 from '@/assets/lounge-2.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import loungeImg from '@/assets/lounge-1.jpg'; // Corrected import path pattern
import lounge1 from '@/assets/lounge-1.jpg';

import { Utensils, Wine, Music, Coffee, Fish, Anchor, MapPin, Phone, Clock, Mail } from 'lucide-react';

// Shared Map URL for now, can be specific if needed
const defaultMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0714839387494!2d85.30934807571694!3d27.715324926184594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdbd8888fb%3A0x99ed61c0f4bdd0af!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus";

export const restaurantData = {
    hero: {
        titleLine1: "Where",
        titleLine2: "Flavor",
        titleLine3: "Meets Vibe",
        subtitle: "Authentic Nepali fusion cuisine, handcrafted cocktails, and nights you'll never forget.",
        backgroundImage: heroBg,
        showReservation: true,
    },
    about: {
        title: "A Culinary Journey Beyond the Ordinary",
        description: "Nestled in the vibrant heart of Kathmandu, Chincha Piro transcends the ordinary dining experience. We're a sanctuary where ancient Nepali culinary traditions dance with contemporary creativity.",
        imageMain: loungeImg,
        imageSmall: dish1,
        features: [
            {
                icon: Utensils,
                title: 'Authentic Fusion',
                description: 'Modern Nepali cuisine reimagined with global influences.',
            },
            {
                icon: Wine,
                title: 'Craft Cocktails',
                description: 'Signature drinks crafted by award-winning mixologists.',
            },
            {
                icon: Music,
                title: 'Electric Nights',
                description: 'Live performances and curated beats every weekend.',
            },
        ],
    },
    menu: {
        title: "Signature Creations",
        description: "Each dish is a masterpiece, crafted to ignite your senses and leave you craving more.",
        categories: ['All', 'Mains', 'Cocktails', 'Specials'],
        items: [
            {
                id: 1,
                name: 'Himalayan Lamb Curry',
                description: 'Slow-cooked lamb with aromatic spices',
                price: 'NPR 1,200',
                category: 'Mains',
                image: dish1,
                featured: true,
            },
            {
                id: 2,
                name: 'Fusion Momo Platter',
                description: 'Signature dumplings with house sauces',
                price: 'NPR 650',
                category: 'Mains',
                image: dish2,
                featured: true,
            },
            {
                id: 3,
                name: 'Grilled Himalayan Steak',
                description: 'Premium cut with herb butter',
                price: 'NPR 2,500',
                category: 'Mains',
                image: dish3,
                featured: false,
            },
            {
                id: 4,
                name: 'Chincha Sunset',
                description: 'Vodka, passion fruit, rose essence',
                price: 'NPR 850',
                category: 'Cocktails',
                image: cocktail1,
                featured: true,
            },
            {
                id: 5,
                name: 'Everest Mule',
                description: 'Local spirits, ginger beer, lime',
                price: 'NPR 750',
                category: 'Cocktails',
                image: cocktail2,
                featured: false,
            },
            {
                id: 6,
                name: "Mixologist's Creation",
                description: "Ask about tonight's special",
                price: 'NPR 900',
                category: 'Specials',
                image: lounge2,
                featured: true,
            },
        ],
    },
    reviews: [
        {
            id: 1,
            name: 'Priya Sharma',
            role: 'Food Blogger',
            content: 'The ambiance is unmatched! The fusion momos are absolutely divine, and the cocktails are crafted to perfection.',
            rating: 5,
            avatar: 'PS',
        },
        {
            id: 2,
            name: 'Rohan Karki',
            role: 'Regular Guest',
            content: 'My go-to spot for special occasions. The staff makes you feel like family, and the Himalayan lamb curry is simply the best in town.',
            rating: 5,
            avatar: 'RK',
        },
    ],
    gallery: [
        { src: lounge1, alt: 'Lounge interior', size: 'large' },
        { src: dish1, alt: 'Signature dish', size: 'small' },
        { src: cocktail1, alt: 'Craft cocktail', size: 'small' },
        { src: heroBg, alt: 'Dining ambiance', size: 'medium' },
        { src: dish2, alt: 'Fusion appetizers', size: 'small' },
        { src: lounge2, alt: 'Bar experience', size: 'medium' },
        { src: dish3, alt: 'Premium steak', size: 'small' },
        { src: cocktail2, alt: 'Tropical drink', size: 'small' },
    ],
    contact: {
        location: {
            address: ['Thamel, Kathmandu', 'Nepal 44600'],
            mapEmbedUrl: defaultMapUrl,
        },
        info: [
            {
                icon: MapPin,
                title: 'Location',
                lines: ['Thamel, Kathmandu', 'Nepal 44600'],
                color: 'from-primary to-pink-400',
            },
            {
                icon: Phone,
                title: 'Contact',
                lines: ['+977 1-4123456', '+977 98XXXXXXXX'],
                color: 'from-secondary to-orange-400',
            },
            {
                icon: Clock,
                title: 'Hours',
                lines: ['Mon-Thu: 12 PM - 12 AM', 'Fri-Sun: 12 PM - 2 AM'],
                color: 'from-primary to-secondary',
            },
            {
                icon: Mail,
                title: 'Email',
                lines: ['info@chinchapiro.com', 'reservations@chinchapiro.com'],
                color: 'from-pink-400 to-secondary',
            },
        ]
    }
};

export const teaSpotData = {
    hero: {
        titleLine1: "Brewing",
        titleLine2: "Serenity",
        titleLine3: "& Warmth",
        subtitle: "A cozy haven for premium teas, artisanal coffee, and delightful conversations.",
        backgroundImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
        showReservation: false,
    },
    about: {
        title: "Sip, Relax, Repeat",
        description: "Escape the bustle of the city and find your calm at Chincha Piro Tea Spot. We specialize in rare teas from the high Himalayas and hand-baked treats that warm the soul.",
        imageMain: "https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?auto=format&fit=crop&q=80",
        imageSmall: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
        features: [
            {
                icon: Coffee,
                title: 'Premium Teas',
                description: 'Selection of the finest loose-leaf teas from Nepal and beyond.',
            },
            {
                icon: Utensils,
                title: 'Fresh Bakery',
                description: 'Daily baked pastries, cakes, and savory delights.',
            },
            {
                icon: Music,
                title: 'Chill Vibes',
                description: 'Acoustic background music perfect for reading or working.',
            },
        ],
    },
    menu: {
        title: "Tea & Treats",
        description: "Curated selection of beverages and light bites to brighten your day.",
        categories: ['Teas', 'Coffee', 'Bakery', 'Snacks'],
        items: [
            {
                id: 1,
                name: 'Masala Chai',
                description: 'Traditional spiced tea boiled to perfection',
                price: 'NPR 150',
                category: 'Teas',
                image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80",
                featured: true,
            },
            {
                id: 2,
                name: 'Matcha Latte',
                description: 'Premium Japanese matcha with steamed milk',
                price: 'NPR 350',
                category: 'Coffee',
                image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80",
                featured: true,
            },
            {
                id: 3,
                name: 'Blueberry Cheesecake',
                description: 'Creamy cheesecake with fresh blueberry topping',
                price: 'NPR 450',
                category: 'Bakery',
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80",
                featured: true,
            },
            {
                id: 4,
                name: 'Avocado Toast',
                description: 'Sourdough bread topped with seasoned avocado',
                price: 'NPR 550',
                category: 'Snacks',
                image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&q=80",
                featured: false,
            },
        ],
    },
    reviews: [
        {
            id: 1,
            name: 'Sita Verma',
            role: 'Student',
            content: 'The perfect spot for studying. The wifi is fast, and the Masala Chai keeps me going.',
            rating: 5,
            avatar: 'SV',
        },
        {
            id: 2,
            name: 'John Doe',
            role: 'Freelancer',
            content: 'Great atmosphere and even better coffee. Highly recommend the cheesecake!',
            rating: 5,
            avatar: 'JD',
        },
    ],
    gallery: [
        { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80", alt: 'Tea ambiance', size: 'large' },
        { src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80", alt: 'Chai', size: 'small' },
        { src: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80", alt: 'Coffee', size: 'small' },
        { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80", alt: 'Interior', size: 'medium' },
    ],
    contact: {
        location: {
            address: ['Thamel, Kathmandu', 'Nepal 44600'],
            mapEmbedUrl: defaultMapUrl,
        },
        info: [
            {
                icon: MapPin,
                title: 'Location',
                lines: ['Thamel, Kathmandu', 'Nepal 44600'],
                color: 'from-primary to-pink-400',
            },
            {
                icon: Phone,
                title: 'Contact',
                lines: ['+977 1-4123456', '+977 98XXXXXXXX'],
                color: 'from-secondary to-orange-400',
            },
            {
                icon: Clock,
                title: 'Hours',
                lines: ['Daily: 7 AM - 9 PM'],
                color: 'from-primary to-secondary',
            },
            {
                icon: Mail,
                title: 'Email',
                lines: ['tea@chinchapiro.com'],
                color: 'from-pink-400 to-secondary',
            },
        ]
    }
};

export const fishSpotData = {
    hero: {
        titleLine1: "Fresh",
        titleLine2: "Catch",
        titleLine3: "Daily",
        subtitle: "Dive into a world of ocean-fresh flavors and exquisite seafood delicacies.",
        backgroundImage: "https://images.unsplash.com/photo-1519708227418-81988761aa84?auto=format&fit=crop&q=80",
        showReservation: true,
    },
    about: {
        title: "Ocean to Table",
        description: "At Chincha Piro Fish Spot, we bring the freshness of the ocean to your plate. Our chefs specialize in preparing seafood that preserves natural flavors while adding a signature twist.",
        imageMain: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
        imageSmall: "https://images.unsplash.com/photo-1535627789689-564a274154fa?auto=format&fit=crop&q=80",
        features: [
            {
                icon: Fish,
                title: 'Fresh Catch',
                description: 'Sourced daily from the best suppliers.',
            },
            {
                icon: Anchor,
                title: 'Sustainable',
                description: 'Committed to responsible and sustainable fishing practices.',
            },
            {
                icon: Wine,
                title: 'Pairings',
                description: 'Expertly curated wine list to complement seafood flavors.',
            },
        ],
    },
    menu: {
        title: "Seafood Delights",
        description: "From grilled fillets to spicy curries, explore the depth of the ocean's bounty.",
        categories: ['All', 'Grilled', 'Fried', 'Curries'],
        items: [
            {
                id: 1,
                name: 'Grilled Salmon',
                description: 'Atlantic salmon with asparagus and lemon butter sauce',
                price: 'NPR 1,800',
                category: 'Grilled',
                image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80",
                featured: true,
            },
            {
                id: 2,
                name: 'Fish & Chips',
                description: 'Classic beer-battered fish with triple-cooked chips',
                price: 'NPR 950',
                category: 'Fried',
                image: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&q=80",
                featured: true,
            },
            {
                id: 3,
                name: 'Spicy Fish Curry',
                description: 'Traditional curry with mustard and chili',
                price: 'NPR 1,100',
                category: 'Curries',
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80",
                featured: true,
            },
        ],
    },
    reviews: [
        {
            id: 1,
            name: 'Anjali Gupta',
            role: 'Seafood Lover',
            content: 'Best fish in town! The grilled salmon was cooked to perfection.',
            rating: 5,
            avatar: 'AG',
        },
        {
            id: 2,
            name: 'David Smith',
            role: 'Tourist',
            content: 'Fresh, flavorful, and fantastic service. A hidden gem for seafood lovers.',
            rating: 5,
            avatar: 'DS',
        },
    ],
    gallery: [
        { src: "https://images.unsplash.com/photo-1519708227418-81988761aa84?auto=format&fit=crop&q=80", alt: 'Fish ambiance', size: 'large' },
        { src: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80", alt: 'Salmon', size: 'small' },
        { src: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&q=80", alt: 'Fish and chips', size: 'small' },
        { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80", alt: 'Interior', size: 'medium' },
    ],
    contact: {
        location: {
            address: ['Lakeside, Pokhara', 'Nepal 33700'],
            mapEmbedUrl: defaultMapUrl, // Keeping same map for now or could differ
        },
        info: [
            {
                icon: MapPin,
                title: 'Location',
                lines: ['Lakeside, Pokhara', 'Nepal 33700'],
                color: 'from-primary to-pink-400',
            },
            {
                icon: Phone,
                title: 'Contact',
                lines: ['+977 1-4654321', '+977 98XXXXXXXX'],
                color: 'from-secondary to-orange-400',
            },
            {
                icon: Clock,
                title: 'Hours',
                lines: ['Daily: 11 AM - 11 PM'],
                color: 'from-primary to-secondary',
            },
            {
                icon: Mail,
                title: 'Email',
                lines: ['fish@chinchapiro.com'],
                color: 'from-pink-400 to-secondary',
            },
        ]
    }
};
