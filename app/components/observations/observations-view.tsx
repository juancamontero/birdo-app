import { closeObs, useDispatch, useSelector } from "@/lib/redux"

import ObservationItem from "./obs-item"
import Loading from "@/app/loading"

export const ObservationsView = () => {
  const { observations, isLoadingObservations } = useSelector(
    (state) => state.places
  )
  const { isObservationsHide } = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  if (isLoadingObservations)
    return <Loading message="loading recent notable observations" />

  let id = 0
  return (
    <div
      className={
        "absolute top-2 md:top-4 right-4 max-h-[50vh]  md:max-h-[70vh]  w-80 md:w-[50vw] z-50 transition-opacity  bg-white shadow-2xl overflow-y-scroll " +
        `${isObservationsHide ? "invisible" : ""}`
      }
    >
      <div className="flex flex-row justify-between sticky top-0 bg-birdo-50 p-2">
        <h1 className="text-birdo-700 text-xl font-extrabold  sm:text-2xl text-lef ">
          Observations
        </h1>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-birdo-800 bg-transparent hover:bg-birdo-accent-100 hover:text-birdo-accent-700 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
          onClick={() => dispatch(closeObs())}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>

      {!(observations.length === 0) && (
        
          <ul className="p-2 ">
            {observations.map((obs) => {
              id++
              return (
                <ObservationItem
                  observation={obs}
                  key={`${obs.subId}_${obs.obsDt}-${id}`}
                />
              )
            })}
          </ul>
     
      )}
    </div>
  )
}
