import type { CategoryItem } from '../data/categories'

/**
 * Tag match strength for a lowercased query. Returns a tier number
 * (lower is better) or -1 when no tag matches.
 *
 * 0 = exact tag (tag === query) — e.g. "rahadani" → "rahadani"
 * 1 = prefix match (query is the start of a tag, or a tag is the start
 *     of the query) — e.g. "rahad" → "rahadani", "passport" → "passport issuance"
 * 2 = whole-word overlap between the query and a tag
 *     — e.g. "passport application" → "passport"
 */
function tagScore(item: CategoryItem, q: string): number {
  const tags = item.tags
  if (!tags || tags.length === 0) return -1
  const qWords = q.split(/\s+/).filter(Boolean)
  let best = -1
  for (const raw of tags) {
    const tag = raw.toLowerCase().trim()
    if (!tag) continue
    let tier = -1
    if (tag === q) {
      tier = 0
    } else if (q.length >= 3 && (tag.startsWith(q) || q.startsWith(tag))) {
      tier = 1
    } else {
      const tagWords = tag.split(/\s+/).filter(Boolean)
      if (tagWords.some((tw) => qWords.includes(tw))) tier = 2
    }
    if (tier >= 0 && (best === -1 || tier < best)) best = tier
  }
  return best
}

/**
 * Relevance score for a single item against a lowercased query.
 * Lower is better; -1 means no match.
 *
 * Tiers: 0 exact name, 1 tag prefix, 2 name contains, 3 exact tag,
 * 4 Nepali name, 5 domain, 6 tag word overlap, 7 description/keywords.
 *
 * A tag prefix (the user is mid-typing a curated synonym, e.g. "rahad"
 * for "rahadani") outranks a plain name match so the intended item
 * surfaces early. An exact tag (e.g. "pokhara" on a university located
 * there) ranks below a name match so the actual place/institution whose
 * name contains the query comes first.
 */
export function scoreItem(item: CategoryItem, q: string): number {
  const name = item.name.toLowerCase()
  if (name === q) return 0
  const tag = tagScore(item, q)
  if (tag === 1) return 1
  if (name.includes(q)) return 2
  if (tag === 0) return 3
  if (item.nepali.toLowerCase().includes(q)) return 4
  if (item.domain.toLowerCase().includes(q)) return 5
  if (tag === 2) return 6
  if (`${item.description} ${item.keywords}`.toLowerCase().includes(q)) return 7
  return -1
}

/**
 * Searches the catalog and ranks results by relevance:
 * exact name, tag prefix, name contains, exact tag, Nepali name,
 * domain, tag word overlap, then description/keywords.
 * Ties are broken alphabetically.
 */
export function searchItems(
  items: CategoryItem[],
  query: string,
): CategoryItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items

  return items
    .map((item) => ({ item, score: scoreItem(item, q) }))
    .filter((entry) => entry.score >= 0)
    .sort(
      (a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name),
    )
    .map((entry) => entry.item)
}
