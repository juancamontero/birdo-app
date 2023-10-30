"use client"

import { useEffect } from "react"

import { getUserLocation } from "@/lib/helpers"
import { setUserLocation } from "@/lib/redux/placesSlice"
import { HomeMapView } from "../maps"
import { useDispatch } from "@/lib/redux"
import { BtnMyLocation, BtnShowHideObs, ObservationsView, SearchBar } from "../observations"

export const HomeMain = () => {
  const dispatch = useDispatch()

  // * Este useEffect solo se ejecuta la 1era vez y detecto user location
  useEffect(() => {
    //* uso then porque el useEffect no se puede hacer async
    getUserLocation().then((lngLat) => dispatch(setUserLocation(lngLat)))
  }, [])
  return (
    <main className="relative md:h-[80vh] h-[60vh]  bg-birdo-800">
      <HomeMapView />
      <ObservationsView />
      <BtnMyLocation/>
      <BtnShowHideObs/>
      <SearchBar/>
    </main>
  )
}
