/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: PlacesSliceState = {
  isLoading: true,
  isLoadingObservations: false,
  isLoadingPlaces: false,
  observations: [],
  places: [],
  userLocation: undefined,
}

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<[number, number]>) => {
      state.userLocation = action.payload
      state.isLoading = false
    },
    setObservations: (state, action: PayloadAction<Observation[]>) => {
      state.observations = action.payload
      state.isLoadingObservations = false
    },
    startSettingObservations: (state) => {
      state.isLoadingObservations = true
    },
    cleanObservations: (state) => {
      state.observations = []
    },
    setPlaces: (state, action: PayloadAction<Feature[]>) => {
      state.places = action.payload
      state.isLoadingPlaces = false
    },
    setLoadingPlaces: (state) => {
      state.places = []
      state.isLoadingPlaces = true
    },
    cleanPlaces: (state) => {
      state.places = []
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  cleanObservations,
  cleanPlaces,
  setLoadingPlaces,
  setObservations,
  setPlaces,
  setUserLocation,
  startSettingObservations,
} = placesSlice.actions

/* Types */
export interface PlacesSliceState {
  isLoading: boolean
  isLoadingObservations: boolean
  isLoadingPlaces: boolean
  observations: Observation[]
  places: Feature[]
  userLocation?: [number, number]
}
