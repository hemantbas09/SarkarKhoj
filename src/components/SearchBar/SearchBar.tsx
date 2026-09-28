import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../data/homepage.json'
import './SearchBar.scss'

function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleSearch = (term: string) => {
    const q = term.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  const results = useMemo(() => {
    const normalized = query.toLowerCase().trim()
    if (!normalized) return []
    return data.searchIndex
      .filter(
        (item) =>
          item.name.toLowerCase().includes(normalized) ||
          item.nepali.includes(normalized) ||
          item.url.toLowerCase().includes(normalized) ||
          item.category.toLowerCase().includes(normalized),
      )
      .slice(0, 5)
  }, [query])

  const showDropdown = focused && query.trim().length > 0

  return (
    <div className="search-bar" ref={wrapperRef}>
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
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setFocused(false)
          }}
        />
        {query.length > 0 && (
          <button
            className="search-bar__clear"
            type="button"
            aria-label="Clear search"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setQuery('')}
          >
            <span className="material-symbols-outlined search-bar__clear-icon">
              close
            </span>
          </button>
        )}
        <button
          className="search-bar__submit"
          type="button"
          onClick={() => handleSearch(query)}
        >
          <span className="search-bar__submit-label">
            {data.hero.searchButton}
          </span>
          <span className="material-symbols-outlined search-bar__submit-icon">
            arrow_forward
          </span>
        </button>
      </div>

      {showDropdown && (
        <div className="search-bar__dropdown">
          <div className="search-bar__dropdown-heading">Top matches</div>
          {results.length === 0 ? (
            <div className="search-bar__no-results">
              No verified portals found matching{' '}
              <strong className="search-bar__no-results-query">
                &ldquo;{query}&rdquo;
              </strong>
              .
            </div>
          ) : (
            results.map((item) => (
              <button
                key={item.url}
                type="button"
                className="search-bar__result"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSearch(item.name)}
              >
                <div className="search-bar__result-info">
                  <span className="search-bar__result-name">{item.name}</span>
                  <span className="search-bar__result-meta">
                    {item.url} &bull; {item.nepali}
                  </span>
                </div>
                <div className="search-bar__result-side">
                  <span className="search-bar__result-category">
                    {item.category}
                  </span>
                  <span className="material-symbols-outlined search-bar__result-icon">
                    north_east
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      )}

      <div className="search-bar__chips">
        <span className="search-bar__chips-label">
          {data.hero.popularSearchesLabel}
        </span>
        {data.hero.quickChips.map((chip) => (
          <button
            key={chip}
            className={`search-bar__chip${query === chip ? ' search-bar__chip--active' : ''}`}
            type="button"
            onClick={() => handleSearch(chip)}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
