import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'watches',
    name: 'Watches',
    slug: 'watches',
    description: 'Luxury timepieces crafted with precision and style.',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
    subcategories: [
      {
        id: 'watches-automatic',
        name: 'Automatic',
        slug: 'automatic',
        description: 'Self-winding mechanical watches powered by the motion of your wrist.'
      },
      {
        id: 'watches-chronograph',
        name: 'Chronograph',
        slug: 'chronograph',
        description: 'Precision timepieces with stopwatch functionality.'
      },
      {
        id: 'watches-dress',
        name: 'Dress',
        slug: 'dress',
        description: 'Elegant watches designed for formal occasions.'
      },
      {
        id: 'watches-sport',
        name: 'Sport',
        slug: 'sport',
        description: 'Durable watches built for active lifestyles.'
      }
    ]
  },
  {
    id: 'footwear',
    name: 'Footwear',
    slug: 'footwear',
    description: 'Premium footwear for style and performance.',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    subcategories: [
      {
        id: 'footwear-sneakers',
        name: 'Sneakers',
        slug: 'sneakers',
        description: 'Casual athletic shoes for everyday wear.'
      },
      {
        id: 'footwear-high-tops',
        name: 'High-Tops',
        slug: 'high-tops',
        description: 'Ankle-covering sneakers with street style.'
      },
      {
        id: 'footwear-running',
        name: 'Running',
        slug: 'running',
        description: 'Performance shoes designed for runners.'
      },
      {
        id: 'footwear-basketball',
        name: 'Basketball',
        slug: 'basketball',
        description: 'Court-ready shoes with support and cushioning.'
      }
    ]
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    slug: 'outerwear',
    description: 'Premium jackets and coats for style and protection.',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    subcategories: [
      {
        id: 'outerwear-jackets',
        name: 'Jackets',
        slug: 'jackets',
        description: 'Stylish and functional jackets for various conditions.'
      },
      {
        id: 'outerwear-parkas',
        name: 'Parkas',
        slug: 'parkas',
        description: 'Long insulated coats for extreme cold.'
      },
      {
        id: 'outerwear-puffers',
        name: 'Puffers',
        slug: 'puffers',
        description: 'Insulated quilted jackets for winter warmth.'
      },
      {
        id: 'outerwear-technical',
        name: 'Technical',
        slug: 'technical',
        description: 'Advanced performance outerwear with cutting-edge features.'
      }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Premium accessories to complement your style.',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    subcategories: [
      {
        id: 'accessories-jewelry',
        name: 'Jewelry',
        slug: 'jewelry',
        description: 'Luxury chains, pendants, and bracelets.'
      },
      {
        id: 'accessories-bags',
        name: 'Bags',
        slug: 'bags',
        description: 'Premium backpacks, duffels, and everyday carriers.'
      },
      {
        id: 'accessories-wallets',
        name: 'Wallets',
        slug: 'wallets',
        description: 'Stylish and functional wallets and cardholders.'
      },
      {
        id: 'accessories-hats',
        name: 'Hats',
        slug: 'hats',
        description: 'Premium headwear for style and protection.'
      }
    ]
  }
];

export const getMainCategories = (): Category[] => {
  return categories;
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getSubcategories = (categorySlug: string): Category[] | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories;
};