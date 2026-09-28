import './SearchInput.scss'

function SearchInput({
  value,
  onChange,
  onClear,
}: {
  value: string
  onChange: (value: string) => void
  onClear: () => void
}) {
  return (
    <div className="search-input">
      <span className="material-symbols-outlined search-input__icon">
        search
      </span>
      <input
        className="search-input__field"
        type="text"
        value={value}
        placeholder="Search government portals…"
        onChange={(e) => onChange(e.target.value)}
      />
      {value.length > 0 && (
        <button
          type="button"
          className="search-input__clear"
          aria-label="Clear search"
          onClick={onClear}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  )
}

export default SearchInput
