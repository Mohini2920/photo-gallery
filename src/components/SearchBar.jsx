import { memo } from 'react'

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by author..."
      className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-rose-400"
    />
  )
}

export default memo(SearchBar)
