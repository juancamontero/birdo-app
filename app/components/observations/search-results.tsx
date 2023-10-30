import { useSelector } from "@/lib/redux"
import { LoadingPlaces } from "./loading-places"
import { SearchItem } from "./search-item"
import { RefObject } from "react"

type Props = {
  inputRef: RefObject<HTMLInputElement>
}
export const SearchResults = ({ inputRef }: Props) => {
  const { isLoadingPlaces, places } = useSelector((state) => state.places)

  if (isLoadingPlaces) return <LoadingPlaces />
  if (places.length === 0) return <></>

  return (
    <>
      <ul className=" w-full text-sm font-medium text-birdo-700 bg-white   mt-2 ">
        {places.map((place) => (
          <SearchItem key={place.id} place={place} inputRef={inputRef} />
        ))}
      </ul>
    </>
  )
}
