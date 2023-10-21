"use client"

import { useEffect } from "react"


import { getUserLocation } from "@/lib/helpers"
import { setUserLocation } from "@/lib/redux/placesSlice"
import { HomeMapView } from "../maps"
import { useDispatch } from "@/lib/redux"
import { ObservationsView } from "../observations"

export const HomeMain = () => {
  const dispatch = useDispatch()


  // * Este useEffect solo se ejecuta la 1era vez y detecto user location
  useEffect(() => {
    //* uso then porque el useEffect no se puede hacer async
    getUserLocation().then((lngLat) => dispatch(setUserLocation(lngLat)))
  }, [])
  return (
    <main className=" flex flex-col md:flex-row md:h-[85vh] h-[75vh]">
      <section className="h-full bg-birdo-800 md:basis-[70%]">
        <HomeMapView/>
      </section>
      <ObservationsView/>
    </main>
  )
}
