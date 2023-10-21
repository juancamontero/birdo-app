import { Map, Marker, Popup } from "mapbox-gl"
import { setMap } from "./mapSlice"

import type { ReduxThunkAction } from "@/lib/redux"


export const setUserMarkerAndMap =
  (map: Map): ReduxThunkAction =>
  (dispatch) => {
    const myLocationPopup = new Popup().setHTML(`<h1>Hola</h1>`)
    new Marker({ color: "#63ed" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map)

    dispatch(setMap(map))
  }


