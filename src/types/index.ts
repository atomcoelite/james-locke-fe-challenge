export interface Category {
  name: string
  checked: boolean
}

export interface Seller {
  name: string
  image: string
}

export interface Brand {
  name: string
  image: string
}

export interface Product {
  id: string
  name: string
  brand: string
  image: string
  price: number
  options: number
}

export type ProductProps = {
  title: string
  price: number
  image: string
}

export interface BannerProps {
  imageSrc: string
  altText: string
}

export type CategoryProps = {
  title: string
  image: string
}

export interface ApiPayload {
  query: string
  sortBy?: 'lowPrice' | 'highPrice' | 'newest' | 'relevance'
  offset?: number
  limit?: number
}
