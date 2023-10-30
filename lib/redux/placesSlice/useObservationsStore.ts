import { LngLatBounds, Marker, Popup } from "mapbox-gl"
import { useDispatch, useSelector } from "../store"
import ebirdApi from "./ebirdApi"
import {
  cleanObservations,
  setObservations,
  startSettingObservations,
} from "./placesSlice"
import { setMarkers } from "../mapSlice"

import Swal from "sweetalert2"

export const useObservationsStore = () => {
  const { userLocation } = useSelector((state) => state.places)
  const { map, markers } = useSelector((state) => state.map)
  const dispatch = useDispatch()

  const getRecentNearbyNotableObservations = async (
    maxResults: number = 50,
    dist: number = 15
  ) => {
    try {
      if (!userLocation) {
        Swal.fire("Can't access location", "Try again", "error")
        throw new Error("Can't access location")
      }
      dispatch(startSettingObservations())

      //* clean previous Markers
      markers.forEach((marker) => marker.remove())

      // * clean previous observations
      dispatch(cleanObservations())

      const { data: observations }: { data: Observation[] } =
        await ebirdApi.get(`geo/recent/notable`, {
          params: {
            lat: userLocation[1],
            lng: userLocation[0],
            maxResults,
            dist,
          },
        })
      const newMarkers: Marker[] = []

      // * debo definir unos límites para que se vea toda la ruta
      const bounds = new LngLatBounds(
        [userLocation[0], userLocation[1]],
        [userLocation[0], userLocation[1]]
      )

      // * añado las observaciones como markers
      for (const obs of observations) {
        const lng = obs.lng
        const lat = obs.lat

        //* inicio la definición de bounds
        bounds.extend([lng, lat])

        const popup = new Popup().setHTML(
          `
    <strong>${obs.comName}</strong>
    <p style="color: #2aa; font-size: 1.2em; font-weight: bold;">${obs.howMany} observations</p>
    <p>On ${obs.obsDt}</p>
    <p>Location name: ${obs.locName}</p>
    `
        )
        popup.addClassName("popup-observation")

        const newMarker = new Marker({ color: "#A43323" })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map!)
        newMarkers.push(newMarker)
        // console.log(`coords lng ${lng}, lat ${lat}`)
      }
      map?.fitBounds(bounds, { padding: 50 })

      // console.log(observations)

      dispatch(setObservations(observations))
      dispatch(setMarkers(newMarkers))
    } catch (error) {
      Swal.fire("Can't get observations", "try again later", "error")
      console.log(error)
    }
  }


  const getRecentNearbyObservations = async (
    maxResults: number = 50,
    dist: number = 15
  ) => {
    try {
      if (!userLocation) {
        Swal.fire("Can't access location", "Try again", "error")
        throw new Error("Can't access location")
      }
      dispatch(startSettingObservations())

      //* clean previous Markers
      markers.forEach((marker) => marker.remove())

      // * clean previous observations
      dispatch(cleanObservations())

      const { data: observations }: { data: Observation[] } =
        await ebirdApi.get(`geo/recent`, {
          params: {
            lat: userLocation[1],
            lng: userLocation[0],
            maxResults,
            dist,
          },
        })
      const newMarkers: Marker[] = []

      // * debo definir unos límites para que se vea toda la ruta
      const bounds = new LngLatBounds(
        [userLocation[0], userLocation[1]],
        [userLocation[0], userLocation[1]]
      )

      // * añado las observaciones como markers
      for (const obs of observations) {
        const lng = obs.lng
        const lat = obs.lat

        //* inicio la definición de bounds
        bounds.extend([lng, lat])

        const popup = new Popup().setHTML(
          `
    <strong>${obs.comName}</strong>
    <p style="color: #2aa; font-size: 1.2em; font-weight: bold;">${obs.howMany} observations</p>
    <p>On ${obs.obsDt}</p>
    <p>Location name: ${obs.locName}</p>
    `
        )
        popup.addClassName("popup-observation")

        const newMarker = new Marker({ color: "#e5614e" })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map!)
        newMarkers.push(newMarker)
        // console.log(`coords lng ${lng}, lat ${lat}`)
      }
      map?.fitBounds(bounds, { padding: 50 })

      // console.log(observations)

      dispatch(setObservations(observations))
      dispatch(setMarkers(newMarkers))
    } catch (error) {
      Swal.fire("Can't get observations", "try again later", "error")
      console.log(error)
    }
  }

  const flyToObservation = (location: [number, number]) => {
    map?.flyTo({
      center: location,
      zoom: 14,
    })
  }

  return {
    getRecentNearbyObservations,
    getRecentNearbyNotableObservations,
    flyToObservation,
  }
}

// `geo/recent/notable?lat=${userLocation[1]}&lng=${userLocation}`
