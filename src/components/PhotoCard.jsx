import { memo } from 'react'

function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      {/* smaller 400x300 version, the download_url images are huge */}
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="h-48 w-full object-cover"
      />

      <div className="flex items-center justify-between p-3">
        <p className="font-medium text-gray-800">{photo.author}</p>

        <button
          onClick={() => onToggle(photo.id)}
          className={isFavourite ? 'text-rose-500' : 'text-gray-400'}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8.5C19 16.65 12 21 12 21z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default memo(PhotoCard)
