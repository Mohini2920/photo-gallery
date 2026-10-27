# Photo Gallery

Photo gallery built with React, Vite and Tailwind CSS. It loads 30 photos from the Picsum API, lets you search by author name, and lets you save favourites (they stay after a refresh).

## Running locally

```
npm install
npm run dev
```

## Folder structure

- `src/hooks/useFetchPhotos.js` - custom hook that fetches the photos
- `src/reducers/favouritesReducer.js` - reducer for favourites
- `src/components/Gallery.jsx` - main component (search, favourites, grid)
- `src/components/SearchBar.jsx` - search input
- `src/components/PhotoCard.jsx` - single photo card with the heart button
