import {
  cleanMarkers,
  cleanObservations,
  cleanPlaces,
  setUserMarker,
  useDispatch,
  useSelector,
} from "@/lib/redux"
import { RefObject } from "react"

type Props = {
  place: Feature
  inputRef: RefObject<HTMLInputElement>
}

export const SearchItem = ({ place, inputRef }: Props) => {
  const { map } = useSelector((state) => state.map)
  const dispatch = useDispatch()

  const flyTo = (place: Feature) => {
    const [lng, lat] = place.center

    map?.flyTo({
      center: [lng, lat],
      zoom: 14,
    })
  }

  const changeUserLocation = (place: Feature) => {
    flyTo(place)
    const [lng, lat] = place.center

    dispatch(cleanMarkers())
    dispatch(cleanObservations())
    dispatch(setUserMarker(lng, lat))
    dispatch(cleanPlaces())
    if (inputRef.current) {
      inputRef.current.value = ""
      inputRef.current.focus()
    }
  }

  return (
    <li
      className="flex flex-row w-full px-1 py-2 border-b border-birdo-100"
    >
      <div className="w-3/4">
        <h6 className="font-extrabold text-sm">{place.text}</h6>
        <p className="text-xs">{place.place_name}</p>
      </div>
      <div className="w-1/4">
        <button className="mb-1 w-full inline-block rounded border border-birdo-600 px-2 py-1 text-xs font-medium text-birdo-600 hover:bg-birdo-600 hover:text-white focus:outline-none focus:ring active:bg-birdo-500 truncate" onClick={() => flyTo(place)}>Fly to</button>
        <button className="mb-1 w-full inline-block rounded border border-birdo-600 px-2 py-1 text-xs font-medium text-birdo-600 hover:bg-birdo-600 hover:text-white focus:outline-none focus:ring active:bg-birdo-500 truncate"  onClick={() => changeUserLocation(place)}>Set location</button>
      </div>
    </li>
  )
}
