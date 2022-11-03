const base = "https://nominatim.openstreetmap.org"

interface GeolocationSearch {
  query: string
}

interface GeolocationReverse {
  lat: number
  lon: number
}

export interface GeolocationSearchResponse {
  class: string // "boundary"
  label: string // "Thailand"
  icon: string // "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png"
  importance: number // 0.8626272891555399
  lat: number // 14.8971921
  lon: number // 100.83273
  osmId: number // 2067731
  osmType: string // "relation"
  id: number // 297819635
  type: string // "administrative"
}

const useGeolocation = () => {
  const search = async ({ query }: GeolocationSearch) => {
    const response = await fetch(
      `${base}/search?format=json&q=${encodeURIComponent(query)}`
    )
    const results = await response.json()
    return results.map(
      (result: any): GeolocationSearchResponse => ({
        class: result.class,
        label: result.display_name,
        icon: result.icon,
        importance: result.importance,
        lat: Number(result.lat),
        lon: Number(result.lon),
        osmId: result.osm_id,
        osmType: result.osm_type,
        id: result.place_id,
        type: result.type,
      })
    ) as GeolocationSearchResponse[]
  }

  const reverse = async ({ lat, lon }: GeolocationReverse) => {
    return await fetch(`${base}/reverse?lat=${lat}&lon=${lon}`)
  }

  return { search, reverse }
}

export default useGeolocation
