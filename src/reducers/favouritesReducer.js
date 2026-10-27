// favourites is just an array of photo ids
export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id)
      }
      return [...state, action.id]

    default:
      return state
  }
}

// read saved favourites when the app first loads
export function getSavedFavourites() {
  const saved = localStorage.getItem('favourites')
  return saved ? JSON.parse(saved) : []
}
