"use client"

/* Core */
import { Provider } from "react-redux"

/* Instruments */
import { reduxStore } from "@/lib/redux"

import mapboxgl from "mapbox-gl" // or "const mapboxgl = require('mapbox-gl');"


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPS_TOKEN as string

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>
}
