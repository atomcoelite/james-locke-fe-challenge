import { Suspense } from 'react'
import MarketplaceBanners from '../components/MarketplaceBanners'
import TrendingProducts from '../components/TrendingProducts'
import PromoBanner from '../components/PromoBanner'
import BeautyCategories from '../components/BeautyCategories'
import styles from '../styles/Home.module.scss'

export default function HomePage() {
  return (
    <div>
      <MarketplaceBanners />
      <Suspense fallback={<div>Loading Trending Products...</div>}>
        <TrendingProducts />
      </Suspense>
      <PromoBanner />
      <section className={styles.shopAndSell}>
        <h2>SHOP & SELL</h2>
        <h1>WHAT YOU LOVE</h1>
      </section>
      <BeautyCategories />
    </div>
  )
}
