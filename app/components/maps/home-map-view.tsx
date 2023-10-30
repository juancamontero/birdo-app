"use client"
import { useLayoutEffect, useRef } from "react"

import {
  useDispatch,
  useSelector,
  setUserMarkerAndMap,
  type ReduxState,
} from "@/lib/redux"
import { Map } from "mapbox-gl"

import "mapbox-gl/dist/mapbox-gl.css"

import Loading from "@/app/loading"

export function HomeMapView() {
  const dispatch = useDispatch()
  const { isLoading, userLocation } = useSelector(
    (state: ReduxState) => state.places
  )

  // * uso el useRef para hacer referencia al DIV del map y poder cambiar el ID el DIV a futuro usando mas mapas
  const mapDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/outdoors-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      })

      dispatch(setUserMarkerAndMap(map))
    }
  }, [isLoading])

  if (isLoading) {
    return <Loading message="... loading map ..." />
  }

  return <div ref={mapDiv} className="h-full z-0 w-full"></div>
}
