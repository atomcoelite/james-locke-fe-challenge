import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categories, featuredProducts } from '@/utils/constants'
import styles from '../styles/BeautyCategories.module.scss'

const BeautyCategories: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={300}
            />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
      <div className={styles.featured}>
        {featuredProducts.map((product, index) => (
          <div key={index} className={styles.featuredProduct}>
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
            />
            <h3>{product.title}</h3>
            <Link href={product.link} className={styles.button}>
              VIEW PRODUCTS
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BeautyCategories
