import { useEffect, useState } from 'react'

export default function useCarouselCardData() {
  const [data, setData] = useState<CardData[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('/api/data/carousel')
          .then((r) => {
            if (r.status === 200) {
              return r.json()
            }
            return ''
          })
          .then((r) => {
            setData(r)
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return data
}
