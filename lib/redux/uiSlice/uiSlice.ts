/* Core */
import { createSlice } from "@reduxjs/toolkit"

const initialState: UiSliceState = {
  isObservationsHide: true,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openObs: (state) => {
      state.isObservationsHide = false
    },
    closeObs: (state) => {
      state.isObservationsHide = true
    },
    swapObs: (state) => {
      state.isObservationsHide = !state.isObservationsHide
    },
  },
})

// Action creators are generated for each case reducer function
export const { openObs, closeObs, swapObs } = uiSlice.actions

/* Types */
export interface UiSliceState {
  isObservationsHide: boolean
}
