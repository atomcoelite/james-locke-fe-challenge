import { notFound } from 'next/navigation'
import { pageData } from '@/utils/constants'
import SearchResult from '../../components/SearchResults'

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  if (!pageData[slug]) {
    notFound()
  }

  return <SearchResult />
}
