import { useObservationsStore } from "@/lib/redux"
import { IconTelescope } from "@tabler/icons-react"

export const BtnNearByNotableObs = () => {
  const { getRecentNearbyNotableObservations } = useObservationsStore()
  return (
    <button
      className="flex items-center px-2 py-2 text-xs tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      onClick={() => getRecentNearbyNotableObservations(50)}
    >
      <svg className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
        <IconTelescope />
      </svg>

      <span className="mx-1">Recent nearby notable observations</span>
    </button>
  )
}
