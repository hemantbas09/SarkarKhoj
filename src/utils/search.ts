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
 * Synonym groups: tags that refer to the same concept in different
 * scripts or languages. When the query matches one member of a group,
 * items tagged with a sibling member also match — e.g. "rahadani"
 * (Nepali for passport) also finds items tagged "passport".
 * Exact tag matches always rank above synonym matches.
 */
const SYNONYM_GROUPS: string[][] = [
  ['passport', 'rahadani', 'रहदानी', 'पासपोर्ट', 'passport issuance'],
  [
    'bijuli',
    'bijuloi',
    'बिजुली',
    'bidyuta',
    'विद्युत',
    'electricity',
    'power',
    'energy',
    'urja',
    'ऊर्जा',
    'hydropower',
  ],
  ['forest', 'forestry', 'jungle', 'jangal', 'जंगल', 'van', 'वन'],
  ['road', 'roads', 'sadak', 'सडक', 'highway'],
  ['health', 'healthcare', 'public health', 'swasthya', 'स्वास्थ्य', 'स्व्ास्थ्य'],
  ['education', 'shiksha', 'शिक्षा'],
  ['agriculture', 'agricultural', 'krishi', 'कृषि', 'farming', 'crop', 'bali', 'बाली'],
  ['finance', 'public finance', 'arth', 'अर्थ', 'kosh', 'कोष', 'treasury', 'budget'],
  ['police', 'prahari', 'प्रहरी'],
  ['defence', 'defense', 'army', 'nepal army', 'raksha', 'रक्षा'],
  ['justice', 'judiciary', 'nyaya', 'न्याय', 'court', 'adalat', 'अदालत'],
  ['tax', 'kar', 'कर', 'vat', 'income tax', 'taxpayer'],
  ['water', 'water supply', 'drinking water', 'khanepani', 'खानेपानी'],
  ['post', 'postal', 'mail', 'hulaka', 'हुलका', 'nepalpost'],
  ['telecom', 'telecommunications', 'communication', 'sanchar', 'सञ्चार'],
  ['transport', 'yaayat', 'यायात', 'rail', 'railways', 'रेल', 'rel'],
  ['tourism', 'paragatan', 'पर्यटन'],
  [
    'culture',
    'sanskriti',
    'संस्कृति',
    'heritage',
    'monuments',
    'smarak',
    'स्मारक',
    'archaeology',
    'puratatwa',
    'पुरातत्त्व',
  ],
  ['labour', 'employment', 'shram', 'श्रम', 'rojgar', 'रोजगार'],
  ['trade', 'commerce', 'vanijya', 'वाणिज्य', 'vyapar', 'व्यापार'],
  ['bank', 'banijya bank', 'वाणिज्य बैंक'],
  ['weather', 'meteorology', 'mausam', 'मौसम', 'climate'],
  ['aviation', 'civil aviation', 'udayan', 'उड्डयन', 'airport', 'air traffic'],
  [
    'citizenship',
    'civil registration',
    'parichaypatra',
    'परिचयपत्र',
    'national id',
    'birth',
    'death',
    'marriage',
  ],
  ['election', 'nirbachan', 'निर्वाचन', 'vote', 'voter'],
  ['prison', 'correctional', 'karagar', 'कारागार'],
  [
    'land',
    'land records',
    'bhumi',
    'भूमि',
    'jagga',
    'जग्गा',
    'napi',
    'नापी',
    'survey',
    'mapping',
    'geospatial',
  ],
  [
    'medicine',
    'pharmaceutical',
    'drug',
    'aushadhi',
    'औषधि',
    'ayurved',
    'ayurveda',
    'आयुर्वेद',
    'alternative medicine',
    'traditional medicine',
  ],
  [
    'science',
    'bijnan',
    'विज्ञान',
    'technology',
    'prabidhi',
    'प्रविधि',
    'information technology',
    'innovation',
  ],
  ['social security', 'samajik suraksha', 'सामाजिक सुरक्षा', 'pension'],
  ['women', 'mahila', 'महिला', 'children', 'bala', 'बाल', 'gender'],
  ['youth', 'yuba', 'युवा'],
  ['sports', 'khelkud', 'खेलकुद'],
  [
    'media',
    'press',
    'broadcasting',
    'prasaran',
    'प्रसारण',
    'publication',
    'printing',
    'mudran',
    'मुद्रण',
  ],
  ['immigration', 'adhyagaman', 'अध्यागमन', 'visa', 'foreign nationals'],
  ['foreign affairs', 'diplomacy', 'embassy', 'pararashtra', 'परराष्ट्र', 'foreign'],
  ['cooperatives', 'co-op', 'sahakari', 'सहकारी'],
  ['industry', 'udyog', 'उद्योग', 'small industries', 'cottage', 'industrial registration'],
  ['housing', 'urban development', 'shahri', 'शहरी', 'building', 'bhawan', 'भवन'],
  ['human rights', 'manab adhikar', 'मानव अधिकार'],
  ['food', 'khaadya', 'खाद्य', 'khan', 'खान', 'food safety', 'food hygiene'],
  [
    'wildlife',
    'vanajanatu',
    'वन्यजन्तु',
    'biodiversity',
    'national parks',
    'conservation',
    'animal',
    'veterinary',
    'pashu',
    'पशु',
  ],
  ['mines', 'minerals', 'bansar', 'भन्सार', 'geology', 'geological survey'],
  ['sanitation', 'sewerage', 'dhal', 'ढल'],
  ['information', 'suachana', 'सूचना'],
  ['parliament', 'sansad', 'संसद'],
  ['law', 'kanun', 'कानून'],
  ['accounting', 'lekhapatra', 'लेखापत्र'],
  ['home', 'home affairs', 'griha', 'गृह', 'gharelu', 'घरेलु'],
  ['environment', 'climate change', 'disaster', 'soil conservation', 'watershed'],
  ['irrigation', 'water resources', 'hydrology'],
]

const SYNONYM_INDEX = new Map<string, number>()
SYNONYM_GROUPS.forEach((group, i) => {
  for (const member of group) SYNONYM_INDEX.set(member, i)
})
const SYNONYM_MEMBERS = [...SYNONYM_INDEX.entries()]

/**
 * Synonym match strength for a lowercased query. Returns a tier number
 * (lower is better) or -1 when no sibling tag matches.
 *
 * 4 = the query (or one of its words) exactly matches a group member and
 *     the item carries a different tag from the same group
 *     — e.g. "rahadani" → item tagged "passport"
 * 8 = the query (or a word) is a prefix of a group member (mid-typing)
 *     and the item carries a sibling tag — e.g. "rahad" → "passport"
 */
function synonymScore(item: CategoryItem, q: string): number {
  const tags = item.tags
  if (!tags || tags.length === 0) return -1
  const normTags = tags.map((t) => t.toLowerCase().trim()).filter(Boolean)
  const words = [q, ...q.split(/\s+/).filter(Boolean)]

  for (const word of words) {
    const idx = SYNONYM_INDEX.get(word)
    if (idx === undefined) continue
    const group = SYNONYM_GROUPS[idx]
    if (normTags.some((t) => t !== word && group.includes(t))) return 4
  }

  for (const word of words) {
    if (word.length < 3) continue
    for (const [member, idx] of SYNONYM_MEMBERS) {
      if (member === word || !member.startsWith(word)) continue
      const group = SYNONYM_GROUPS[idx]
      if (normTags.some((t) => t !== word && group.includes(t))) return 8
    }
  }
  return -1
}

/**
 * Relevance score for a single item against a lowercased query.
 * Lower is better; -1 means no match.
 *
 * Tiers: 0 exact name, 1 tag prefix, 2 name contains, 3 exact tag,
 * 4 synonym tag, 5 Nepali name, 6 domain, 7 tag word overlap,
 * 8 synonym prefix, 9 description/keywords.
 *
 * A tag prefix (the user is mid-typing a curated synonym, e.g. "rahad"
 * for "rahadani") outranks a plain name match so the intended item
 * surfaces early. An exact tag (e.g. "pokhara" on a university located
 * there) ranks below a name match so the actual place/institution whose
 * name contains the query comes first. Synonym matches (e.g. "rahadani"
 * → item tagged "passport") rank right after exact tags, so the item
 * literally tagged with the query word always comes first.
 */
export function scoreItem(item: CategoryItem, q: string): number {
  const name = item.name.toLowerCase()
  if (name === q) return 0
  const tag = tagScore(item, q)
  if (tag === 1) return 1
  if (name.includes(q)) return 2
  if (tag === 0) return 3
  const syn = synonymScore(item, q)
  if (syn === 4) return 4
  if (item.nepali.toLowerCase().includes(q)) return 5
  if (item.domain.toLowerCase().includes(q)) return 6
  if (tag === 2) return 7
  if (syn === 8) return 8
  if (`${item.description} ${item.keywords}`.toLowerCase().includes(q)) return 9
  return -1
}

/**
 * Searches the catalog and ranks results by relevance:
 * exact name, tag prefix, name contains, exact tag, synonym tag,
 * Nepali name, domain, tag word overlap, synonym prefix, then
 * description/keywords. Ties are broken alphabetically.
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
