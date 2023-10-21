/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { Map, Marker } from "mapbox-gl"

const initialState: MapSliceState = {
  isMapReady: false,
  map: undefined,
  markers: [],
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
  },
})

// Action creators are generated for each case reducer function
export const { setMap , setMarkers} = mapSlice.actions

/* Types */
export interface MapSliceState {
  isMapReady: boolean
  map?: Map
  markers: Marker[]
}
