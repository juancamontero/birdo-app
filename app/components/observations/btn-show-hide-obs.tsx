import { swapObs, useDispatch, useSelector } from "@/lib/redux"
import { IconEye, IconEyeOff } from "@tabler/icons-react"

export const BtnShowHideObs = () => {
  const { isObservationsHide } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  return (
    <button
      className=" text-sm p-4  rounded bg-birdo-700  text-birdo-accent-100 hover:bg-birdo-600 hover:text-birdo-50 focus:outline-none focus:ring-birdo-950 active:text-birdo-accent-100 absolute top-20 left-4 shadow-lg"
      onClick={() => dispatch(swapObs())}
    >
      <svg
        aria-hidden="true"
        className="w-6 h-6 mr-1"
        viewBox="0 0 22 22"
        fill="currentColor"
      >
        {isObservationsHide ? <IconEye /> : <IconEyeOff />}
      </svg>
    </button>
  )
}
