import { useSelector } from "@/lib/redux"
import { BtnNearByNotableObs } from "./btn-nearby-notable-obs"
import ObservationItem from "./obs-item"

export const ObservationsView = () => {
  const { observations } = useSelector((state) => state.places)
  let id = 0
  return (
    <div className="bg-birdo-200 md:max-h-full md:basis-[30%] p-4 overflow-auto max-h-40">
      <BtnNearByNotableObs />
      <hr />
      {!(observations.length === 0) && (
        <div className="flow-root">
          <ul role="list">
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
        </div>
      )}
    </div>
  )
}
