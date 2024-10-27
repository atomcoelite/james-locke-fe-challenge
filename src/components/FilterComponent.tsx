import { useRouter } from 'next/navigation'
import styles from '../styles/FilterComponent.module.scss'

export default function FilterComponent() {
  const router = useRouter()
  const handleFilterChange = (category: string) => {
    router.push(`/search?category=${category}`)
  }
  return (
    <div className={styles.filters}>
      <h3>Filter by Category</h3>
      <ul>
        <li onClick={() => handleFilterChange('skincare')}>Skincare</li>
        <li onClick={() => handleFilterChange('makeup')}>Makeup</li>
        <li onClick={() => handleFilterChange('hair')}>Hair</li>
      </ul>
    </div>
  )
}
