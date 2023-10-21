/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: PlacesSliceState = {
  isLoading: true,
  userLocation: undefined,
  observations: [],
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
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserLocation , setObservations} = placesSlice.actions

/* Types */
export interface PlacesSliceState {
  isLoading: boolean
  userLocation?: [number, number]
  observations: Observation[]
}
