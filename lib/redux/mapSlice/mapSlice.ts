/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { Map, Marker } from "mapbox-gl"

const initialState: MapSliceState = {
  isMapReady: false,
  map: undefined,
  markers: [],
  userCurrentMarker: undefined,
}

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<Map>) => {
      state.map = action.payload
      state.isMapReady = true
    },
    setMarkers: (state, action: PayloadAction<Marker[]>) => {
      state.markers = action.payload
    },
    cleanMarkers: (state) => {
      state.markers.forEach((marker) => marker.remove())
    },
    setCurrentUserMarker: (state, action: PayloadAction<Marker>) => {
      state.userCurrentMarker = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { cleanMarkers, setMap, setMarkers, setCurrentUserMarker } =
  mapSlice.actions

/* Types */
export interface MapSliceState {
  isMapReady: boolean
  map?: Map
  markers: Marker[]
  userCurrentMarker: Marker | undefined
}
