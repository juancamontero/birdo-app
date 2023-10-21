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
        //!todo cont map= and setMap(map)
        container: mapDiv.current!,
        style: "mapbox://styles/mapbox/outdoors-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      })

      // const myLocationPopup = new Popup().setHTML(`
      //     <h4>Reference location</h4>
      //     <p>Results refers here, use the search box to check ofr other places </p>
      // `)
      // new Marker({ color: "#63ed" })
      //   .setLngLat(map.getCenter())
      //   .setPopup(myLocationPopup)
      //   .addTo(map)

      dispatch(setUserMarkerAndMap(map))
    }
  }, [isLoading])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div
      ref={mapDiv}
      className="h-full z-0"
      style={
        {
          // height: '100%',
        }
      }
    ></div>
  )
}
