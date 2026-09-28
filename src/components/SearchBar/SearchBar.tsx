import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../../data/homepage.json'
import categoryData from '../../data/categories'
import { searchItems } from '../../utils/search'
import './SearchBar.scss'

const items = categoryData.items
const categories = categoryData.categories

function SearchBar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchItems(items, query)
  }, [query])

  const showDialog = focused && query.trim().length > 0

  const goAll = () => {
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="search-bar" ref={wrapperRef}>
      <div className="search-bar__input-wrap">
        <span className="material-symbols-outlined search-bar__search-icon">
          search
        </span>
        <input
          ref={inputRef}
          className="search-bar__input"
          type="text"
          autoComplete="off"
          placeholder={data.hero.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setFocused(false)
            if (e.key === 'Enter') goAll()
          }}
        />
        {query.length > 0 && (
          <button
            className="search-bar__clear"
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery('')
              inputRef.current?.focus()
            }}
          >
            <span className="material-symbols-outlined search-bar__clear-icon">
              close
            </span>
          </button>
        )}
        {showDialog && (
          <div className="search-bar__dialog">
            <div className="search-bar__dialog-list">
              {results.length === 0 ? (
                <div className="search-bar__no-results">
                  No verified portals found matching &ldquo;{query}&rdquo;.
                </div>
              ) : (
                results.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="search-bar__result"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={goAll}
                  >
                    <div className="search-bar__result-info">
                      <span className="search-bar__result-name">
                        {item.name}
                      </span>
                      <span className="search-bar__result-meta">
                        {item.domain} &bull; {item.nepali}
                      </span>
                    </div>
                    <div className="search-bar__result-side">
                      <span className="search-bar__result-category">
                        {categories[item.code as keyof typeof categories]?.breadcrumbCurrent ?? item.sectorLabel}
                      </span>
                      <span className="material-symbols-outlined search-bar__result-icon">
                        north_east
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
            <div className="search-bar__dialog-footer">
              <span className="search-bar__dialog-count">
                {results.length} result{results.length === 1 ? '' : 's'}
              </span>
              <button
                type="button"
                className="search-bar__see-all"
                onMouseDown={(e) => e.preventDefault()}
                onClick={goAll}
              >
                See all
                <span className="material-symbols-outlined search-bar__see-all-icon">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
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
            onClick={() => {
              setQuery(chip)
              setFocused(true)
              inputRef.current?.focus()
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
