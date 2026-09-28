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

  const pageItems = getPageItems(page, totalPages)

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
        {pageItems.map((item, index) =>
          item === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="pagination__ellipsis">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={`pagination__button${item === page ? ' pagination__button--active' : ''}`}
              aria-current={item === page ? 'page' : undefined}
              onClick={() => onPageChange(item)}
            >
              {item}
            </button>
          ),
        )}
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

function getPageItems(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const items: (number | 'ellipsis')[] = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  if (start > 2) items.push('ellipsis')
  for (let i = start; i <= end; i += 1) items.push(i)
  if (end < total - 1) items.push('ellipsis')
  items.push(total)
  return items
}

export default Pagination
