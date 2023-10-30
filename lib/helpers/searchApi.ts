import axios from "axios"

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    access_token: process.env.NEXT_PUBLIC_MAPS_TOKEN as string,
    language: "en,es",
    limit: 5,
  },
})

export default searchApi
