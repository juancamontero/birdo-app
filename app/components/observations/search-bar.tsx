"use client"
import { searchPlacesByTerm, useDispatch } from "@/lib/redux"
import { ChangeEvent, useRef } from "react"
import { SearchResults } from "./search-results"

export const SearchBar = () => {
  const dispatch = useDispatch()
  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    // * Primero limpio el debouce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    // * Luego creo el timeout
    debounceRef.current = setTimeout(() => {
      // todo: buscar o consultar

      dispatch(searchPlacesByTerm(event.target.value))
    }, 1000) //! Cambiar a 350 para producción
  }
  const inputQuery = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="absolute top-4 right-4 md:left-28 bg-birdo-100  w-60 p-1 z-40 md:w-96 mb-2 shadow-2xl">
        <input
          ref={inputQuery}
          type="text"
          placeholder="Search and change location..."
          className="text-sm w-full p-1 bg-birdo-50 shadow-inner focus:outline-none text-birdo-800  placeholder:text-birdo-950"
          onChange={onQueryChange}
        />
        <SearchResults inputRef={inputQuery} />
      </div>
    </>
  )
}
