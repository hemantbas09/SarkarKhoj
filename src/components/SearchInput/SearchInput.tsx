import './SearchInput.scss'

function SearchInput({
  value,
  onChange,
  onSubmit,
  buttonLabel,
}: {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  buttonLabel: string
}) {
  return (
    <form
      className="search-input"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
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
          onClick={() => onChange('')}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
      <button type="submit" className="search-input__submit">
        <span className="search-input__submit-label">{buttonLabel}</span>
        <span className="material-symbols-outlined search-input__submit-icon">
          arrow_forward
        </span>
      </button>
    </form>
  )
}

export default SearchInput
