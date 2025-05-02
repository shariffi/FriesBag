import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'watch-1',
    name: 'Celestial Chronograph',
    brand: 'Nebula',
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    description: 'The Celestial Chronograph represents the pinnacle of luxury timekeeping. Crafted with precision engineering and premium materials, this watch features a sapphire crystal face, automatic movement, and water resistance up to 100 meters. The celestial-inspired design elements make it not just a timepiece, but a statement piece that stands the test of time.',
    features: [
      'Swiss automatic movement',
      'Sapphire crystal glass',
      '316L stainless steel case',
      'Genuine leather strap',
      '100m water resistance',
      'Luminous hands and markers',
      '5-year warranty'
    ],
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/9978741/pexels-photo-9978741.jpeg'
    ],
    category: 'watches',
    tags: ['luxury', 'chronograph', 'automatic', 'men'],
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'James Wilson',
        userAvatar: 'https://i.pravatar.cc/150?u=james',
        rating: 5,
        comment: 'Exceptional quality and craftsmanship. The attention to detail is remarkable and it keeps perfect time.',
        date: '2023-11-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sophia Chen',
        userAvatar: 'https://i.pravatar.cc/150?u=sophia',
        rating: 4,
        comment: 'Beautiful watch that looks even better in person. The leather strap is very comfortable.',
        date: '2023-12-03'
      }
    ],
    stock: 15,
    isNew: false,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'watch-2',
    name: 'Quantum Timekeeper',
    brand: 'Astro',
    price: 2499.99,
    description: 'The Quantum Timekeeper redefines luxury with its innovative design and cutting-edge technology. This premium timepiece features a titanium case, scratch-resistant sapphire crystal, and a high-precision Swiss movement that ensures impeccable accuracy. The distinctive celestial dial showcases intricate details inspired by distant galaxies.',
    features: [
      'High-precision Swiss movement',
      'Titanium case with sapphire crystal',
      'Anti-reflective coating',
      'Exhibition case back',
      '50m water resistance',
      'Hand-stitched alligator leather strap',
      'Limited edition (500 pieces worldwide)'
    ],
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2494608/pexels-photo-2494608.jpeg'
    ],
    category: 'watches',
    tags: ['luxury', 'limited edition', 'titanium', 'men'],
    rating: 4.9,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Alexander DuBois',
        userAvatar: 'https://i.pravatar.cc/150?u=alexander',
        rating: 5,
        comment: 'Absolutely stunning timepiece. The craftsmanship is incredible and it garners compliments everywhere I go.',
        date: '2024-01-20'
      }
    ],
    stock: 5,
    isNew: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'shoes-1',
    name: 'Cosmic Runners',
    brand: 'AirLux',
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    description: 'Step into the future with Cosmic Runners. These premium athletic shoes combine cutting-edge technology with streetwear aesthetics. The responsive cushioning and adaptive fit provide unparalleled comfort whether you\'re hitting the pavement or making a fashion statement.',
    features: [
      'Knitted upper for breathability',
      'Responsive cushioning technology',
      'Reflective details for visibility',
      'Durable rubber outsole',
      'Removable antimicrobial insole',
      'Reinforced heel counter'
    ],
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg'
    ],
    category: 'footwear',
    subcategory: 'sneakers',
    tags: ['sports', 'running', 'streetwear'],
    rating: 4.7,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Marcus Johnson',
        userAvatar: 'https://i.pravatar.cc/150?u=marcus',
        rating: 5,
        comment: 'Most comfortable sneakers I\'ve ever owned. The cushioning is incredible and they look amazing.',
        date: '2023-10-12'
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Jessica Williams',
        userAvatar: 'https://i.pravatar.cc/150?u=jessica',
        rating: 4,
        comment: 'Great shoes for both running and casual wear. Definitely worth the price.',
        date: '2023-11-30'
      }
    ],
    stock: 28,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black/Red', 'White/Blue', 'All Black'],
    isNew: false,
    isTrending: true,
    isFeatured: false
  },
  {
    id: 'shoes-2',
    name: 'Gravity Defier High-Tops',
    brand: 'StarStep',
    price: 299.99,
    description: 'The Gravity Defier High-Tops redefine urban footwear with their bold design and premium materials. These statement sneakers feature a unique sole design that provides exceptional support and comfort, while the high-top silhouette offers extra ankle stability and unmistakable style.',
    features: [
      'Premium leather and suede construction',
      'Signature cushioned midsole',
      'Reinforced ankle support',
      'Memory foam insole',
      'Durable rubber outsole with unique tread pattern',
      'Quick-lace system'
    ],
    images: [
      'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg',
      'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg'
    ],
    category: 'footwear',
    subcategory: 'high-tops',
    tags: ['designer', 'streetwear', 'urban'],
    rating: 4.6,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Tyrone Jackson',
        userAvatar: 'https://i.pravatar.cc/150?u=tyrone',
        rating: 5,
        comment: 'These shoes are fire! Get compliments everywhere I go. Super comfortable too.',
        date: '2024-02-05'
      }
    ],
    stock: 15,
    sizes: ['8', '9', '10', '11', '12', '13'],
    colors: ['Black/Gold', 'White/Silver', 'Navy/Red'],
    isNew: true,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'jacket-1',
    name: 'Nova Puffer Jacket',
    brand: 'Stellar',
    price: 499.99,
    originalPrice: 599.99,
    discount: 17,
    description: 'The Nova Puffer Jacket offers exceptional warmth without compromising on style. This premium outerwear piece features advanced insulation technology that provides maximum heat retention while maintaining a lightweight feel. The water-resistant exterior and luxurious details make it the perfect statement piece for colder months.',
    features: [
      'Advanced thermal insulation',
      'Water-resistant exterior',
      'Durable YKK zippers',
      'Interior pocket system',
      'Adjustable hood and cuffs',
      'Reflective details for visibility',
      'Machine washable'
    ],
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg'
    ],
    category: 'outerwear',
    subcategory: 'jackets',
    tags: ['winter', 'puffer', 'waterproof'],
    rating: 4.8,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Emily Parker',
        userAvatar: 'https://i.pravatar.cc/150?u=emily',
        rating: 5,
        comment: 'Incredibly warm yet lightweight. Perfect for harsh winters and looks stylish too.',
        date: '2023-12-15'
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: 'Michael Foster',
        userAvatar: 'https://i.pravatar.cc/150?u=michael',
        rating: 4,
        comment: 'Great quality jacket that keeps me warm in -10°C weather. The pockets are conveniently placed too.',
        date: '2024-01-22'
      }
    ],
    stock: 20,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Forest Green'],
    isNew: false,
    isTrending: true,
    isFeatured: true
  },
  {
    id: 'jacket-2',
    name: 'Eclipse Technical Jacket',
    brand: 'Orbital',
    price: 799.99,
    description: 'The Eclipse Technical Jacket represents the pinnacle of outerwear innovation. This premium performance jacket combines cutting-edge material technology with meticulous craftsmanship to deliver unparalleled protection against the elements. With its sleek design and functional details, it transitions seamlessly from urban environments to outdoor adventures.',
    features: [
      '3-layer waterproof breathable membrane',
      'Fully sealed seams',
      'Articulated sleeves for enhanced mobility',
      'Adjustable storm hood',
      'Ventilation zippers',
      'RFID-blocking pocket',
      'Integrated LED light system'
    ],
    images: [
      'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg',
      'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg',
      'https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg'
    ],
    category: 'outerwear',
    subcategory: 'technical jackets',
    tags: ['waterproof', 'technical', 'premium'],
    rating: 4.9,
    reviews: [
      {
        id: 'r9',
        userId: 'u9',
        userName: 'Nathan Harris',
        userAvatar: 'https://i.pravatar.cc/150?u=nathan',
        rating: 5,
        comment: 'The most technical and functional jacket I\'ve ever owned. Worth every penny for the quality and features.',
        date: '2024-02-10'
      }
    ],
    stock: 10,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Graphite', 'Arctic Blue'],
    isNew: true,
    isTrending: false,
    isFeatured: true
  },
  {
    id: 'accessory-1',
    name: 'Nebula Chain Necklace',
    brand: 'Astral',
    price: 349.99,
    description: 'The Nebula Chain Necklace is a statement piece that captures the essence of cosmic elegance. Crafted from premium materials with meticulous attention to detail, this luxury accessory features a unique pendant inspired by distant galaxies. The perfect addition to elevate any outfit with its subtle yet distinctive presence.',
    features: [
      'Premium stainless steel construction',
      'Hand-polished finish',
      'Hypoallergenic materials',
      'Secure lobster clasp',
      'Adjustable length',
      'Tarnish-resistant coating',
      'Custom gift box included'
    ],
    images: [
      'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg',
      'https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg',
      'https://images.pexels.com/photos/1209499/pexels-photo-1209499.jpeg'
    ],
    category: 'accessories',
    subcategory: 'jewelry',
    tags: ['necklace', 'chain', 'statement piece'],
    rating: 4.7,
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: 'Olivia Martinez',
        userAvatar: 'https://i.pravatar.cc/150?u=olivia',
        rating: 5,
        comment: 'Absolutely stunning piece. The craftsmanship is exceptional and it looks much more expensive than it is.',
        date: '2023-11-28'
      },
      {
        id: 'r11',
        userId: 'u11',
        userName: 'Daniel Kim',
        userAvatar: 'https://i.pravatar.cc/150?u=daniel',
        rating: 4,
        comment: 'Great quality and design. The chain feels substantial and the clasp is secure.',
        date: '2024-01-15'
      }
    ],
    stock: 25,
    colors: ['Silver', 'Gold', 'Black'],
    isNew: false,
    isTrending: true,
    isFeatured: false
  },
  {
    id: 'accessory-2',
    name: 'Orbit Premium Backpack',
    brand: 'Gravity',
    price: 189.99,
    originalPrice: 229.99,
    discount: 17,
    description: 'The Orbit Premium Backpack combines sophisticated design with practical functionality. Crafted from high-quality materials, this luxury accessory features multiple compartments to organize your essentials, including a padded laptop sleeve and hidden security pockets. The ergonomic design ensures comfort even when fully loaded.',
    features: [
      'Water-resistant premium materials',
      'Anti-theft protection system',
      'USB charging port',
      'Padded laptop compartment (fits up to 17")',
      'Breathable back panel',
      'Luggage strap',
      'RFID-blocking pocket'
    ],
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
      'https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg',
      'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg'
    ],
    category: 'accessories',
    subcategory: 'bags',
    tags: ['backpack', 'travel', 'tech'],
    rating: 4.8,
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: 'Rachel Green',
        userAvatar: 'https://i.pravatar.cc/150?u=rachel',
        rating: 5,
        comment: 'Perfect combination of style and function. The compartments are well-designed and the quality is outstanding.',
        date: '2024-02-01'
      }
    ],
    stock: 18,
    colors: ['Black', 'Navy', 'Grey'],
    isNew: true,
    isTrending: true,
    isFeatured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(product => product.isTrending);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, limit);
};