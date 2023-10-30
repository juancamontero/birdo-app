import { useSelector } from "@/lib/redux"
import { IconFocus2 } from "@tabler/icons-react"

export const BtnMyLocation = () => {
  const { userLocation } = useSelector((state) => state.places)
  const { map } = useSelector((state) => state.map)

  const goToMyLocation = () => {
    if (!userLocation) return
    if (!map) return
    map.flyTo({ center: userLocation, zoom: 14 })
  }

  return (
    <button
      className=" text-sm p-4  rounded bg-birdo-600  text-birdo-accent-100 hover:bg-birdo-700 hover:text-birdo-50 focus:outline-none focus:ring active:text-birdo-accent-100 absolute top-4 left-4 shadow-lg"
      onClick={goToMyLocation}
    >
      <svg
        aria-hidden="true"
        className="w-6 h-6 mr-1"
        viewBox="0 0 22 22"
        fill="currentColor"
      >
        <IconFocus2 />
      </svg>
    </button>
  )
}
