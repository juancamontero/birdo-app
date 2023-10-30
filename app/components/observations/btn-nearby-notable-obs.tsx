import { openObs, useDispatch, useObservationsStore } from "@/lib/redux"


type Props = {
  maxResults?: number
  dist?: number
}

export const BtnNearByNotableObs = ({ maxResults, dist }: Props) => {
  const dispatch = useDispatch()
  const { getRecentNearbyNotableObservations } = useObservationsStore()

  const showObservations = () => {
    dispatch(openObs())
    getRecentNearbyNotableObservations(maxResults, dist)
  }
  return (
    <button
      className="w-full  lg:mx-0 lg:py-1 rounded-sm text-sm py-1 mb-0.5 shadow-2xl bg-birdo-600 text-white hover:bg-birdo-700 hover:text-birdo-50 focus:outline-none focus:ring active:text-birdo-accent-100"
      onClick={showObservations}
    >
      <span className="text-sm leading-tight font-medium text-left">
        Recent nearby notable
      </span>
    
    </button>
  )
}
