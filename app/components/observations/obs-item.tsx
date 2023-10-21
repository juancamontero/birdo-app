import { useObservationsStore } from "@/lib/redux"

type Props = {
  observation: Observation
}
export default function ObservationItem({ observation }: Props) {
  const { comName, locName, howMany, obsDt, lat, lng } = observation

  const { flyToObservation } = useObservationsStore()

  return (
    <li className="py-1 px-2 mt-2 sm:py-2 bg-birdo-800 rounded-md">
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/favicom-114x.png"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="md:text-xs text-xs font-medium truncate leading-5 text-birdo-50">
            {comName}
          </p>
          <p className="text-xs text-birdo-accent-100 truncate">{locName}</p>
          <p className="text-xs text-birdo-accent-500 truncate">{obsDt}</p>
        </div>
        <div
          className="inline-flex items-start md:text-base  text-sm font-semibold text-birdo-700 bg-birdo-100 p-1 self-start rounded-sm mt-1 cursor-pointer  shadow-lg"
          onClick={() => flyToObservation([lng, lat])}
        >
          {howMany} Obs
        </div>
      </div>
    </li>
  )
}
