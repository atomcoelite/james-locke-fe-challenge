'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { initialTredingProducts } from '@/utils/constants'
import styles from '../styles/TrendingProducts.module.scss'

const TrendingProducts: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const index = searchParams.get('index')
    if (index) {
      setCurrentIndex(parseInt(index, 10))
    }
  }, [searchParams])

  const updateIndex = (newIndex: number) => {
    const updatedIndex =
      (newIndex + initialTredingProducts.length) % initialTredingProducts.length
    setCurrentIndex(updatedIndex)
    router.push(`?index=${updatedIndex}`, { scroll: false })
  }

  return (
    <section className={styles.trendingProducts}>
      <h2>TRENDING PRODUCTS</h2>
      <div className={styles.carousel}>
        <button
          className={styles.navButton}
          onClick={() => updateIndex(currentIndex - 1)}
        >
          <ChevronLeft />
        </button>
        <div className={styles.productGrid}>
          {initialTredingProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.productCard} ${
                index === currentIndex ? styles.active : ''
              }`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                />
                <span className={styles.commission}>15% Commission</span>
              </div>
              <div className={styles.productInfo}>
                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>{product.options} Options</p>
                <p>${product.price}</p>
              </div>
              <div className={styles.actions}>
                <button className={styles.addToShelf}>Add to Shelf</button>
                <button className={styles.addToBag}>Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={() => updateIndex(currentIndex + 1)}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}

export default TrendingProducts
