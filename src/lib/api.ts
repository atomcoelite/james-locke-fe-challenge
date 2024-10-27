const BASE_URL = 'https://search.my.videoshops.com/test/search'
const API_KEY = 'dnN0ZXN0Oi9KSzY1X2VqSCMxIQ=='

import { ApiPayload } from '@/types'

export async function fetchVideos(payload: ApiPayload) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data from the API')
  }

  return response.json()
}
