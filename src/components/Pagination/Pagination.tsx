import './Pagination.scss'

function Pagination({
  config,
  page,
  totalPages,
  totalCount,
  onPageChange,
}: {
  config: {
    pageSize: number
    showingLabel: string
    ofLabel: string
    prevLabel: string
    nextLabel: string
  }
  page: number
  totalPages: number
  totalCount: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  const { pageSize } = config
  const from = (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, totalCount)

  return (
    <nav className="pagination" aria-label="Results pages">
      <span className="pagination__info">
        {config.showingLabel} {from}–{to} {config.ofLabel} {totalCount}
      </span>
      <div className="pagination__controls">
        <button
          className="pagination__button"
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label={config.prevLabel}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <span className="pagination__page">
          {page} / {totalPages}
        </span>
        <button
          className="pagination__button"
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label={config.nextLabel}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </nav>
  )
}

export default Pagination
