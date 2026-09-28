import './RegionFilter.scss'

function RegionFilter({
  config,
  provinces,
  districts,
  activeProvince,
  activeDistrict,
  onSelectProvince,
  onSelectDistrict,
}: {
  config: { allProvinces: string; allDistricts: string }
  provinces: string[]
  districts: string[]
  activeProvince: string
  activeDistrict: string
  onSelectProvince: (province: string) => void
  onSelectDistrict: (district: string) => void
}) {
  return (
    <div className="region-filter">
      <div className="region-filter__field">
        <span className="material-symbols-outlined region-filter__icon">
          public
        </span>
        <select
          className="region-filter__select"
          value={activeProvince}
          onChange={(e) => onSelectProvince(e.target.value)}
          aria-label="Filter by pradesh"
        >
          <option value="all">{config.allProvinces}</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>
      <div className="region-filter__field">
        <span className="material-symbols-outlined region-filter__icon">
          location_on
        </span>
        <select
          className="region-filter__select"
          value={activeDistrict}
          onChange={(e) => onSelectDistrict(e.target.value)}
          aria-label="Filter by district"
        >
          <option value="all">{config.allDistricts}</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RegionFilter
