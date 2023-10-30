import { closeObs, useDispatch, useObservationsStore } from "@/lib/redux"
import Link from "next/link"

type Props = {
  observation: Observation
}
export default function ObservationItem({ observation }: Props) {
  const { comName, locName, howMany, obsDt, lat, lng, speciesCode } =
    observation
  const dispatch = useDispatch()

  const { flyToObservation } = useObservationsStore()
  const moveToObservation = () => {
    flyToObservation([lng, lat])
    dispatch(closeObs())
  }

  return (
    <li className="flex flex-row w-full px-1 py-2 border-b border-birdo-100">
      <div className="md:min-w-[75%] min-w-[50%] flex flex-col pr-2">
        <h6 className="text-left font-extrabold text-sm  leading-5 text-birdo-700">
          {comName}
        </h6>
        <p className="text-xs text-birdo-800 truncate">{locName}</p>
        <p className="text-xs text-birdo-accent-500 truncate">{obsDt}</p>
      </div>
      <div className="w-[30%] md:w-[20%] flex flex-col justify-center items-center">
        <h6 className=" text-center text-3xl font-extrabold text-birdo-700">
          {howMany}
        </h6>
        <p className=" text-center text-xs font-light text-birdo-700">
          observations
        </p>
      </div>
      <div className="flex flex-col w-[20] md:w-[8%] justify-center">
        <button
          className="mb-1 w-full inline-block rounded border border-birdo-600 px-2 py-1 text-xs font-medium text-birdo-600 hover:bg-birdo-600 hover:text-white focus:outline-none focus:ring active:bg-birdo-500 truncate"
          onClick={moveToObservation}
        >
          Fly to
        </button>

        <Link href={`https://ebird.org/species/${speciesCode}`} target="_blank">
          <p className="text-center text-xs text-birdo-500 truncate underline hover:text-birdo-accent-500">
            eBird
          </p>
        </Link>
      </div>
    </li>
  )
}
