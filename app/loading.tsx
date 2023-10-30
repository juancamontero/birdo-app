import { IconRotateClockwise2 } from "@tabler/icons-react"

type Props = {
  message?: string
}

export default function Loading({ message = "loading" }: Props) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center h-full w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-birdo-700 via-birdo-900 to-birdo-600">
      <svg
        className="animate-spin h-10 w-10 mb-3  text-birdo-accent-700"
        viewBox="0 0 24 24"
      >
        <IconRotateClockwise2 />
      </svg>
      <h2 className="text-birdo-accent-100 font-extrabold text-sm whitespace-normal max-w-xs text-center">
        ... {message} ...
      </h2>
    </div>
  )
}
