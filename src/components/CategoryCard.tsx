import styles from '../styles/CategoryCard.module.scss'
import { CategoryProps } from '@/types/index'

export default function CategoryCard({ title, image }: CategoryProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}
