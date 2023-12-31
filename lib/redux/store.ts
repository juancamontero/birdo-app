/* Core */
import { configureStore, type ThunkAction, type Action } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux"

/* Instruments */

import { middleware } from "./middleware"

import { placesSlice } from "./placesSlice"
import { mapSlice } from "./mapSlice"
import { uiSlice } from "./uiSlice/uiSlice"

export const reduxStore = configureStore({
  reducer: {
    places: placesSlice.reducer,
    map: mapSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware)
  },
})
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
