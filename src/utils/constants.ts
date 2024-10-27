import { Product, Category, Seller, Brand } from '@/types/index'

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/1.png',
    price: 18,
    options: 2,
  },
  {
    id: '2',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/2.png',
    price: 18,
    options: 2,
  },
  {
    id: '3',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/3.png',
    price: 18,
    options: 2,
  },
  {
    id: '4',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/4.png',
    price: 18,
    options: 2,
  },
  {
    id: '5',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/5.png',
    price: 18,
    options: 2,
  },
  {
    id: '6',
    name: 'Superfood Air-Whip Moisture Cream',
    brand: 'Youth to the People',
    image: '/images/products/6.png',
    price: 18,
    options: 2,
  },
]

export const initialCategories: Category[] = [
  { name: 'Accessories', checked: true },
  { name: 'BB & CC Cream', checked: true },
  { name: 'Blush', checked: false },
  { name: 'Bronzer', checked: true },
  { name: 'Brow & Lash tools', checked: false },
  { name: 'Brush Cleaners', checked: false },
  { name: 'Brush Sets', checked: false },
  { name: 'Color Correct', checked: true },
  { name: 'Concealer', checked: false },
  { name: 'Contour', checked: false },
]

export const initialSellers: Seller[] = [
  { name: 'ALEXANDRA RARE', image: '/images/sellers/1.png' },
  { name: 'JESSICA RARES', image: '/images/sellers/2.png' },
  { name: 'MEGAN RAREGENT', image: '/images/sellers/3.png' },
]

export const initialBrands: Brand[] = [
  { name: 'Rare Beauty', image: '/images/brands/1.png' },
]

export const initialTredingProducts: Product[] = [
  {
    id: '1',
    brand: 'Christian Dior',
    name: 'Addict Lip Glow Oil',
    options: 7,
    price: 36,
    image: '/images/trending_products/1.png',
  },
  {
    id: '2',
    brand: 'Embryolisse',
    name: 'Lait-Cream Concentre',
    options: 2,
    price: 25,
    image: '/images/trending_products/2.png',
  },
  {
    id: '3',
    brand: 'Color Wow',
    name: 'Dream Coat Supernatural Spray',
    options: 2,
    price: 32,
    image: '/images/trending_products/3.png',
  },
  {
    id: '4',
    brand: 'Saie',
    name: 'Sun Melt Balm Bronzer - Fair Bronze',
    options: 5,
    price: 34,
    image: '/images/trending_products/4.png',
  },
]

export const categories = [
  { name: 'BEAUTY', image: '/images/beauty_products/1.png' },
  { name: 'LIPS', image: '/images/beauty_products/2.png' },
  { name: 'EYES', image: '/images/beauty_products/3.png' },
  { name: 'SKIN', image: '/images/beauty_products/4.png' },
  { name: 'BROWS', image: '/images/beauty_products/5.png' },
  { name: 'MAKEUP', image: '/images/beauty_products/6.png' },
  { name: 'HAIR', image: '/images/beauty_products/7.png' },
  { name: 'BEAUTY TOOLS', image: '/images/beauty_products/8.png' },
]

export const featuredProducts = [
  {
    title: "LIP COMBOS WE'RE LOVING RIGHT NOW",
    image: '/images/beauty_bottom/1.png',
    link: '/lip-combos',
  },
  {
    title: 'OUR FAVORITE LIGHTWEIGHT MAKEUP ROUTINE',
    image: '/images/beauty_bottom/2.png',
    link: '/makeup-routine',
  },
]

// prettier-ignore
export const pageData: Record<string, { title: string; description: string }> = {
  marketplace: {
    title: 'Welcome to the Marketplace',
    description: 'Explore and shop the best products across different categories.',
  },
  brands: {
    title: 'Brands A-Z',
    description: 'Brand A-Z',
  },
  makeup: {
    title: 'Makeup Products',
    description: 'Discover a wide range of makeup products from top brands.',
  },
  hair: {
    title: 'Hair Care & Styling',
    description: 'Find the best hair care products and styling tools.',
  },
  skincare: {
    title: 'Skincare Products',
    description: 'Browse our collection of skincare products to keep your skin glowing.',
  },
  nails: {
    title: 'Nail Care & Polish',
    description: 'Explore the latest in nail care, colors, and treatments.',
  },
  'tools-brushes': {
    title: 'Tools & Brushes',
    description: 'Find the perfect tools and brushes for your beauty routine.',
  },
  fragrance: {
    title: 'Fragrances',
    description: 'Discover a wide range of luxurious fragrances for every occasion.',
  },
  body: {
    title: 'Body Care',
    description: 'Shop the best body care products for healthy and nourished skin.',
  },
}
