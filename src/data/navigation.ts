import { NavigationItem } from '../types';

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Watches',
    path: '/products/watches',
    children: [
      {
        name: 'Automatic',
        path: '/products/watches?subcategory=automatic'
      },
      {
        name: 'Chronograph',
        path: '/products/watches?subcategory=chronograph'
      },
      {
        name: 'Dress',
        path: '/products/watches?subcategory=dress'
      },
      {
        name: 'Sport',
        path: '/products/watches?subcategory=sport'
      }
    ]
  },
  {
    name: 'Footwear',
    path: '/products/footwear',
    children: [
      {
        name: 'Sneakers',
        path: '/products/footwear?subcategory=sneakers'
      },
      {
        name: 'High-Tops',
        path: '/products/footwear?subcategory=high-tops'
      },
      {
        name: 'Running',
        path: '/products/footwear?subcategory=running'
      },
      {
        name: 'Basketball',
        path: '/products/footwear?subcategory=basketball'
      }
    ]
  },
  {
    name: 'Outerwear',
    path: '/products/outerwear',
    children: [
      {
        name: 'Jackets',
        path: '/products/outerwear?subcategory=jackets'
      },
      {
        name: 'Parkas',
        path: '/products/outerwear?subcategory=parkas'
      },
      {
        name: 'Puffers',
        path: '/products/outerwear?subcategory=puffers'
      },
      {
        name: 'Technical',
        path: '/products/outerwear?subcategory=technical'
      }
    ]
  },
  {
    name: 'Accessories',
    path: '/products/accessories',
    children: [
      {
        name: 'Jewelry',
        path: '/products/accessories?subcategory=jewelry'
      },
      {
        name: 'Bags',
        path: '/products/accessories?subcategory=bags'
      },
      {
        name: 'Wallets',
        path: '/products/accessories?subcategory=wallets'
      },
      {
        name: 'Hats',
        path: '/products/accessories?subcategory=hats'
      }
    ]
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

export const footerNavigation = {
  shop: [
    { name: 'Watches', path: '/products/watches' },
    { name: 'Footwear', path: '/products/footwear' },
    { name: 'Outerwear', path: '/products/outerwear' },
    { name: 'Accessories', path: '/products/accessories' },
    { name: 'New Arrivals', path: '/products?filter=new' },
    { name: 'Trending', path: '/products?filter=trending' }
  ],
  account: [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Profile', path: '/profile' },
    { name: 'Orders', path: '/profile/orders' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Cart', path: '/cart' }
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Returns', path: '/returns' },
    { name: 'Privacy Policy', path: '/privacy' }
  ],
  legal: [
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Return Policy', path: '/returns' },
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' }
  ],
};