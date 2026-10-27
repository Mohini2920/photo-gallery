import { useEffect, useState } from 'react'

function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=30')
      .then((res) => {
        // fetch doesn't fail on 404/500 by itself, so check it here
        if (!res.ok) {
          throw new Error('Failed to load photos')
        }
        return res.json()
      })
      .then((data) => setPhotos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { photos, loading, error }
}

export default useFetchPhotos
