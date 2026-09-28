import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../data/homepage.json'
import './SearchBar.scss'

const DEBOUNCE_MS = 400

function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  useEffect(() => {
    const q = query.trim()
    if (!q) return
    const timer = setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(q)}`)
    }, DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [query, navigate])

  return (
    <div className="search-bar">
      <div className="search-bar__input-wrap">
        <span className="material-symbols-outlined search-bar__search-icon">
          search
        </span>
        <input
          className="search-bar__input"
          type="text"
          autoComplete="off"
          placeholder={data.hero.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <button
            className="search-bar__clear"
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery('')}
          >
            <span className="material-symbols-outlined search-bar__clear-icon">
              close
            </span>
          </button>
        )}
      </div>

      <div className="search-bar__chips">
        <span className="search-bar__chips-label">
          {data.hero.popularSearchesLabel}
        </span>
        {data.hero.quickChips.map((chip) => (
          <button
            key={chip}
            className={`search-bar__chip${query === chip ? ' search-bar__chip--active' : ''}`}
            type="button"
            onClick={() => setQuery(chip)}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
