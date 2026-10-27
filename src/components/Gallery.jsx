import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import { favouritesReducer, getSavedFavourites } from '../reducers/favouritesReducer'
import SearchBar from './SearchBar'
import PhotoCard from './PhotoCard'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [search, setSearch] = useState('')
  const [favourites, dispatch] = useReducer(favouritesReducer, [], getSavedFavourites)

  // save to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const toggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', id })
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    )
  }, [photos, search])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-rose-500"></div>
      </div>
    )
  }

  if (error) {
    return <p className="py-20 text-center text-red-500">{error}</p>
  }

  return (
    <div>
      <SearchBar value={search} onChange={handleSearch} />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            onToggle={toggleFavourite}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
