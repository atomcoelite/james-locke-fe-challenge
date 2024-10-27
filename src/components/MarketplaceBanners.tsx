import React from 'react'
import Image from 'next/image'
import { BannerProps } from '@/types/index'
import styles from '../styles/MarketplaceBanners.module.scss'

const Banner: React.FC<BannerProps> = ({ imageSrc, altText }) => (
  <div className={styles.banner}>
    <Image
      src={imageSrc}
      width={0}
      height={0}
      sizes="100vw"
      style={{ height: '100%', width: '400px' }}
      alt={altText}
    />
  </div>
)

const MarketplaceBanners: React.FC = () => {
  return (
    <section className={styles.marketplaceSection}>
      <div className={styles.bannerGrid}>
        <Banner
          imageSrc="/images/marketplace_banners/1.png"
          altText="Kylie Jenner promoting her beauty products"
        />
        <Banner
          imageSrc="/images/marketplace_banners/2.png"
          altText="Woman with pink hair promoting Pink Friday products"
        />
        <Banner
          imageSrc="/images/marketplace_banners/3.png"
          altText="Woman wearing Fenty sunglasses"
        />
      </div>
    </section>
  )
}

export default MarketplaceBanners
