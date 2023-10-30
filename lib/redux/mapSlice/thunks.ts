import { Map, Marker, Popup } from "mapbox-gl"
import { setCurrentUserMarker, setMap } from "./mapSlice"

import {
  setPlaces,
  setLoadingPlaces,
  type ReduxThunkAction,
  setUserLocation,
} from "@/lib/redux"
import searchApi from "@/lib/helpers/searchApi"

export const setUserMarkerAndMap =
  (map: Map): ReduxThunkAction =>
  (dispatch) => {
    const myLocationPopup = new Popup().setHTML(
      `<h1>Hi, this is your current location</h1>`
    )
    const marker = new Marker({ color: "#63ed" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map)

    dispatch(setMap(map))
    dispatch(setCurrentUserMarker(marker))
  }

export const setUserMarker = (lng: number, lat: number): ReduxThunkAction => {
  return (dispatch, getState) => {
    dispatch(setUserLocation([lng, lat]))
    const { map, userCurrentMarker } = getState().map

    //* remove previous marker
    userCurrentMarker?.remove()
    const myLocationPopup = new Popup().setHTML(
      `<h1>Hi, this is your current location</h1>`
    )
    const marker = new Marker({ color: "#63ed" })
      .setLngLat([lng, lat])
      .setPopup(myLocationPopup)
      .addTo(map!)

    dispatch(setCurrentUserMarker(marker))
  }
}

export const searchPlacesByTerm = (query: string): ReduxThunkAction => {
  return async (dispatch, getState) => {
    const { userLocation } = getState().places

    if (query.length === 0) {
      dispatch(setPlaces([]))
      return []
    }

    if (!userLocation) throw new Error("Current location not available")

    dispatch(setLoadingPlaces())

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: userLocation.join(","),
      },
    })

    dispatch(setPlaces(resp.data.features))
  }
}
